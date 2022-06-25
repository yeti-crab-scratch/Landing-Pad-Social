const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors")

const PORT = 3000;

app.use(cors())
app.use(express.json());

app.get('/', (req,res) => {
    console.log(req.body)
    res.send({key: "It worked!"})
})

app.listen(PORT, console.log(`listening on port ${PORT}...`));