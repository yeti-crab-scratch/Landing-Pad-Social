const express = require('express');

const homeController = require('../controllers/homeControllers')

const router = express.Router();

// handle requests functions
router.get('/', homeController.getEvents, (req, res) => {
    // console.log(res.locals.events)
    res.status(200).json(res.locals.events);
})

router.patch('/', homeController.updateEvent, (req, res) => {
    console.log(res.locals.updatedEvent)
    res.status(200).json(res.locals.updatedEvent)
})



module.exports = router;