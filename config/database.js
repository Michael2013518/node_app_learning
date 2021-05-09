const mongoose = require('mongoose')

const uri = "mongodb://localhost:27017/ravent"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.Promise = global.Promise
mongoose
    .connect(uri, options)
    .then(db => console.log('数据库连接成功！'))
    .catch(error => console.log('数据库连接失败'))


module.exports = mongoose