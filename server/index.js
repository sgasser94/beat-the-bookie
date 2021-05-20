const express = require('express');
const path = require('path');
const port = 3000;
const MLB = require('./external/fetchMLB.js');
const db = require('./db/connection.js');
const model = require('./db/model.js');

db.on('error', (err) => console.log('Error connected to MongodB - mvp', err));
db.once('open', () => console.log('connected to MongoDB - mvp!'));


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

app.get('/mlbBets', (req, res) => {
  model.searchActiveBaseballBets((err, data) => {
    if (err) {
      console.log('err getting bets', err);
      res.status(404);
      res.send();
    } else {
      console.log('sending bets');
      res.status(200);
      res.send(data);
    }
  })
})

app.post('/mlbBets', (req, res) => {
  model.recordBaseballBet(req.body, (err) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(201);
      res.end();
    }
  })
})







app.listen(port, () => {
  console.log(`ReviewAPI running on port ${port}`);
});




