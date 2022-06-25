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
            next({
                log: 'Error in get events middleware',
                status: 400,
                message: 'Unable to retrieve events.',
            });
        });
}

homeController.updateEvent = (req, res, next) => {
    const data = req.body;
    const columnNames = Object.keys(data);
    const values = Object.values(data);
    let subStr = "";
    // console.log(columnNames)
    columnNames.forEach((elem, idx) => {
        if (elem !== "id") {
            if (idx !== columnNames.length - 1) {
                if (typeof values[idx] === "number") {
                    subStr += ` ${elem} = ${values[idx]},`
                } else {
                    subStr += ` ${elem} = '${values[idx]}',`
                }
            } else {
                if (typeof values[idx] === "number") {
                    subStr += ` ${elem} = ${values[idx]}`
                } else {
                    subStr += ` ${elem} = '${values[idx]}'`
                }
            }
        }
    });
    // subStr = 'columnName1 = value[1], columnName2 = value[2]'

    const queryStr = `UPDATE events SET ${subStr} WHERE id = ${data.id}`;

    db.query(queryStr)
        .then(() => {
            console.log(data);
            res.locals.updatedEvent = data;
            return next();
        }).catch(err => {
            next({
                log: 'Error in get update events middleware',
                status: 400,
                message: 'Unable to update events.',
            });
        });
}

// id	title	date	start_time	end_time	activity_type	num_participants	zip	participant_id	comment_id

module.exports = homeController;