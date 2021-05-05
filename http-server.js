const http = require('http')

const app = http.createServer((req, res) => {
    res.write('hello ~')
    res.end()
})

app.listen(3005, () => {
    console.log('服务已启动：http://localhost:3005')
})