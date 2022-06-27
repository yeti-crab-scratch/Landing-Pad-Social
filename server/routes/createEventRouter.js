const express = require('express');
const eventController = require('../controllers/eventController')
const path = require('path');

const router = express.Router();

router.post('/', eventController.createEvent, (req, res) => {
    res.status(200).json(res.locals.newEvent);
})
  

module.exports = router;