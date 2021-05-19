const BaseballBet = require('./controller.js');

const recordBaseballBet = (data, callback) => {
  const newBet = new BaseballBet({
    gameId: data.gameId,
    selectedBet: data.selectedBet,
    time: Date.parse(data.time),
    status: data.status,
    homeTeam: data.homeTeam,
    awayTeam: data.awayTeam,
    wager: data.wager,
    payOut: data.payOut,
    win: data.win
  })
  newBet.save((err, newBet) => {
    if (err) {
      callback(err);
    } else {
      console.log('betsaved!', newBet);
      callback(null);
    }
  })
}

const searchActiveBaseballBets = (callback) => {
  BaseballBet.find({ status: 'Scheduled' }, (err, bets) => {
    if (err) {
      callback(err);
    } else {
      callback(null, bets);
    }
  })
}

module.exports = {
  recordBaseballBet,
  searchActiveBaseballBets
};