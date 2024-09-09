const express = require('express');
const {json} = require("express");
const app = express();

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/message', (req, res) => {
    const jsonData = {
        "message": "Welcome to my node server.",
        "user-ip": req.ip
    };

    //res.send('Welcome to my Node.js server!');
    res.json(jsonData);
});