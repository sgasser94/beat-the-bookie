const $ = require('jquery');

module.exports = {
  fetchGames: (date) => new Promise((resolve, reject) => {
    const url = `/mlbGames?date=${date}`;
    $.ajax({
      method: 'GET',
      url: `/mlbGames?date=2020-MAY-19`,
      success: (data) => resolve(data),
      error: (err) => reject(err),
    })
  }),
  fetchActiveBets: () => new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: '/mlbBets',
      success: (data) => resolve(data),
      error: (err) => reject(err),
    })
  })
}