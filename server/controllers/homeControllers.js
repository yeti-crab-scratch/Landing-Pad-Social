const { home } = require('nodemon/lib/utils');
const db = require('../models/databaseModel');
const router = require('../routes/homeRouter');

const homeController = {};

homeController.getEvents = (req, res, next) => {
    const queryStr = 'SELECT * FROM events';

    db.query(queryStr)
        .then(data => {
            res.locals.events = data.rows;
            return next();
        }).catch(err => {
            next(err);
        });
}


module.exports = homeController;