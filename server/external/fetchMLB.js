const Authorization = require('../../tokens.js');
const axios = require('axios');

const fetchGames = (callback) => {
  axios.get(`https://fly.sportsdata.io/v3/mlb/scores/json/GamesByDate/2021-MAY-18?key=${Authorization.TOKEN}`)
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