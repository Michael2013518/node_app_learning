const db = require('../config/database')

const options = {

}

const scheme = new db.Schema({
    title: {
        type: String
    }
}, options)

const Event = db.model('Event', scheme)


module.exports = Event