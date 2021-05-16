const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const SocketIO = require('socket.io')
const eventRouter = require('./routes/eventRouter')
const app = new express()
const port = process.env.PORT || 3000

const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|png|gif|jpeg)$/)) {
        return callback(new Error('images only:'), false)
    }
    callback(null, true)
}

// 文件上传
const multer = require('multer')
const upload = multer({ dest: 'upload/', fileFilter })


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((error, request, response) => {
    if (error) {
        response.status(500).send({
            message: error.message
        })
    }
})
let comments = []
app.locals.comments = comments

// 设置使用的视图
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

// 使用记录请求日志的中间件
app.use(morgan('dev'))
app.use('/api', eventRouter)
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/comments/index', (req, res) => {
    res.render('comments/index')
})
app.get('/socket', (req, res) => {
        res.render('socket')
    })
    // 提交评论
app.post('/comments/index', (req, res) => {
    if (!req.body.comment) {
        res.status(400).send('请输入评论内容')
        return
    }
    comments.push({
        comment: req.body.comment,
        created_at: new Date()
    })
    res.redirect('/comments/list')
})

// 显示评论
app.get('/comments/list', (req, res) => {
    res.render('comments/list')
})


// 上传文件接口
app.post('/upload', upload.single('avater'), (req, res, next) => {
    res.send(req.file)
})
app.post('uploads', upload.array('photos', 3), (req, res, next) => {
    res.send(req.files)
})
let server = app.listen(port, () => {
    console.log('app is running :http://localhost:3000')
})

let io = SocketIO(server)

io.on('connection', (socket) => {
    console.log('user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('message', (message) => {
        console.log(message)
        io.emit('message', message)
    })

})