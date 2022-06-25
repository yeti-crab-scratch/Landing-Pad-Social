const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors")

const PORT = 3000;

const homeRouter = require('./routes/homeRouter');

app.use(cors())
app.use(express.json());

app.use('/home', homeRouter);

// app.get('/', (req,res) => {
//     console.log(req.body)
//     res.send({key: "It worked!"})
// })


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page does not exist.'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, console.log(`listening on port ${PORT}...`));

module.exports = app;