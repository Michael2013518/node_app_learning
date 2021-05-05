const http = require('http')

const options = {
    protocol: 'http:',
    hostname: 'api.douban.com',
    port: '80',
    method: 'GET',
    path: '/v2/movie/top250'
}
let responseData = ''
const request = http.request(options, (response) => {
    console.log(response.statusCode)
    response.on('data', (chunk) => {
        responseData += chunk
    })
    response.on('end', () => {
        JSON.parse(responseData).subjects.map((item) => {
            console.log(item.title)
        })
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()