import React from 'react';
import moment from 'moment';

class PastBet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('pastbet', this.props);
    const {
      wager,
      payOut,
      selectedBet,
      awayTeam,
      homeTeam,
      gameId,
      status,
      win,
      time,
      awayTeamRuns,
      awayTeamHits,
      awayTeamErrors,
      homeTeamRuns,
      homeTeamHits,
      homeTeamError,
      inning
    } = this.props;
    const winningTeam = awayTeamRuns > homeTeamRuns ? awayTeam : homeTeam;
    const teamBetOn = selectedBet === "awayML" ? awayTeam : homeTeam;

    return (
    <div id="past-bet">
    <div id="game-summary">
      {awayTeam} {awayTeamRuns} | {homeTeam} {homeTeamRuns}
      <div>
     {moment(time).calendar()}
      </div>
    </div>
    <div id="bet-summary">
    selectedBet: {teamBetOn}, {winningTeam} won
    </div>
    <div id="bet-tokens">
      Bet {wager} for {payOut}
    </div>
  </div>
    )
  }
}

export default PastBet;