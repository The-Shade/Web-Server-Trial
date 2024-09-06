const express = require('express');
const {json} = require("express");
const app = express();

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/message', (req, res) => {
    res.send('Welcome to my Node.js server!');
});