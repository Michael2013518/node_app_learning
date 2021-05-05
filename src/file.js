const fs = require('fs')

// 获取文件或目录信息
/*
fs.stat('src', (err, stat) => {
    if (err) {
        console.log(err)
    } else {
        console.log(stat)
        console.log(`文件：${stat.isFile()}`)
        console.log(`目录：${stat.isDirectory()}`)
    }
})
*/
// 创建目录
/*
fs.mkdir('logs', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`目录logs创建成功.`)
    }
})
*/
// 写入文件
/*
fs.writeFile('logs/hello.log', 'Hello \n', (error) => {
    if (error) {
        console.log('写入失败.', error)
    } else {
        console.log('写入文件成功。')
    }
})
*/
// 追加文件内容
/*
fs.appendFile('logs/hello.log', '你好 \n', (error) => {
    if (error) {
        console.log('写入失败.', error)
    } else {
        console.log('写入文件成功。')
    }
})
*/

// 读取文件
fs.readFile('logs/hello.log', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        //console.log(data.toString())
        console.log(data)
    }
})

// 读取文件夹
/*
fs.readdir('logs', (err, file) => {
    if (err) {
        console.log(err)
    } else {
        console.log(file)
    }
})
*/
// 重命名，rmdir 删除文件夹，unlink 删除文件
/*
fs.rename('logs/hello.log', 'logs/greeting.log', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('重命名成功')
    }
})
*/
// 删除文件
fs.readdirSync('logs').map((file) => {
    fs.unlink(`logs/${file}`, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log(`${file}删除成功`)
        }
    })
})