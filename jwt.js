const jwt = require('jsonwebtoken')
const fs = require('fs')

const payload = {
    name: 'michael',
    password: '1232dsfsdf',
    admin: true
}

const secret = "ILOVEYOU"
const token = jwt.sign(payload, secret)
    // 签发token
console.log('token', token)

// 验证token

jwt.verify(token, secret, (error, decoded) => {
    if (error) {
        console.log(eror)
        return
    }
    console.log(decoded)
})

// RS256

const privateKey = fs.readFileSync('./key/rsa_private_key.pem')

const rsa_token = jwt.sign(payload, privateKey, { algorithm: 'RS256' })

console.log('签发rs256 token', rsa_token)

const publicKey = fs.readFileSync('./key/rsa_public_key.pem')
jwt.verify(rsa_token, publicKey, (error, decoded) => {
    if (error) {
        console.log(eror)
        return
    }
    console.log(decoded)
})