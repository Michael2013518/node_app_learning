const Event = require('../../models/Event')
const data = require('./SimpleEvent.json')

Event.insertMany(data)
    .then(res => console.log(res))
    .catch(error => console.log(error))