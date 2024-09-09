const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get(window.location.href + '/message', (req, res) => {
    const jsonData = {
        "message": "Welcome to my node server.",
        "user-ip": req.ip
    };
    console.log("1")

    //res.send('Welcome to my Node.js server!');
    res.json(jsonData);
    res.send();
});