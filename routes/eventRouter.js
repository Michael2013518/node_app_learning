const express = require('express')
const EventController = require('../controllers/EventController')
const router = express.Router()


router.route('/events')
    .get(EventController.index)
    .post(EventController.store)

router.route('/events/:id')
    .get(EventController.show)
    .patch(EventController.update)
    .delete(EventController.destroy)

module.exports = router