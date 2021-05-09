const Event = require('./models/Event')

const event = new Event({
    title: 'NodeJS 开发'
})

event.save()
    .then(document => console.log(document))
    .catch(err => console.log(error))