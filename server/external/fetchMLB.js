const Authorization = require('../../tokens.js');
const axios = require('axios');

const fetchGames = (date, callback) => {
  axios.get(`https://fly.sportsdata.io/v3/mlb/scores/json/GamesByDate/${date}?key=${Authorization.TOKEN}`)
    .then((response) => {
      callback(response);
    })
    .catch((err) => {
      callback(err);
    })
}

module.exports = {
  fetchGames
};