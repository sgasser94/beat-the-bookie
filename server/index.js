const express = require('express');
const path = require('path');
const port = 3000;
const MLB = require('./external/fetchMLB.js');


var app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/mlbGames', (req, res) => {
  var date = req.query.date;
  console.log(date);
  MLB.fetchGames(date, (games) => {
      res.send(games.data);
  })
})



app.listen(port, () => {
  console.log(`ReviewAPI running on port ${port}`);
});




