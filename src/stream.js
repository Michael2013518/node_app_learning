const fs = require('fs')
const zlib = require('zlib')
    // createReadStream createWriteStream
const fileReadStream = fs.createReadStream('data.json')
const fileWriteStream = fs.createWriteStream('data1.json')

// 读取数据，通过pipe，写入
fileReadStream
    .pipe(zlib.createGzip())
    .pipe(fileWriteStream)

fileReadStream.on('pipe', (source) => {
    console.log(source)
})


fileStream.once('data', (chunk) => {
    console.log(chunck.toString())
})
let count = 0
fileReadStream.on('data', (chunk) => {
    console.log(`${ ++count } 接收到：${chunk.length}`)
})
fileReadStream.on('end', () => {
    console.log('--结束--')
})
fileReadStream.on('error', (error) => {
    console.log(error)
})