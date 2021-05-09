const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./config/database')

const app = new express()

app.use(bodyParser.urlencoded({ extended: false }))
let comments = []
app.locals.comments = comments

// 设置使用的视图
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

// 使用记录请求日志的中间件
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/comments/index', (req, res) => {
    res.render('comments/index')
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

app.listen(3003, () => {
    console.log('app is running :http://localhost:3000')
})