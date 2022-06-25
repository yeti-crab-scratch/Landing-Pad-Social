const { home } = require('nodemon/lib/utils');
const db = require('../models/databaseModel');
const router = require('../routes/homeRouter');
const { response } = require('../server');

const eventController = {};

eventController.createEvent = (req, res, next) => {
    const data = req.body;

    const queryStr = `INSERT INTO events (title, date, start_time, end_time, activity_type, num_participants, zip)
  VALUES ('${data.title}', '${data.date}', '${data.start_time}', '${data.end_time}', '${data.activity_type}', ${data.num_participants}, ${data.zip})`

    db.query(queryStr)
        .then(() => {
            res.locals.newEvent = data;
            return next();
        }).catch(err => {
            return next({
                log: 'Error in create event middleware',
                status: 400,
                message: 'Please verify data input are correct type.',
            });
        })

}

module.exports = eventController;