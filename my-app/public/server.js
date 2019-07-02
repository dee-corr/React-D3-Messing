const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/public', (req, res) => {
  //res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  res.sendFile(__dirname + '/index.html');
});