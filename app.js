const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => console.log('Listening on localhost:3000'));