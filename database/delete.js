const Event = require('../models/Event')

Event.findByIdAndRemove('6097b54e9a9d6611262c79d7')
    .then(document => console.log(document))