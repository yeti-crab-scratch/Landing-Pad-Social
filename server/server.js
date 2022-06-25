const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.get('/', (req,res) => {
    console.log(req.body)
    res.send("It worked!")
})

app.listen(PORT, console.log(`listening on port ${PORT}...`));