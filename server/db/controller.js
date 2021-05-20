const mongoose = require('mongoose');
const db = require('./connection.js');

const baseballSchema = new mongoose.Schema({
  gameId: Number,
  selectedBet: String,
  time: Number,
  status: String,
  homeTeam: String,
  awayTeam: String,
  wager: Number,
  payOut: Number,
  win: Boolean,
  homeTeamRuns: Number,
  homeTeamHits: Number,
  homeTeamErrors: Number,
  awayTeamRuns: Number,
  awayTeamHits: Number,
  awayTeamErrors: Number
})

const BaseballBet = mongoose.model('BaseballBet', baseballSchema);

module.exports = BaseballBet;

