const Event = require('../models/Event')

const id = '6097b54e9a9d6611262c79d6'
const body = {
    title: "Google IO 开发者大会"
}
Event.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(document => console.log(document))