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
    let result = '';
    if (winningTeam === teamBetOn) {
      result = <div id="won-bet">+{payOut} Tokens</div>
    } else {
      result = <div id="lost-bet">-{payOut} Tokens</div>
    }

    return (
    <div id="past-bet">
    <div id="game-summary">
      {awayTeam} {awayTeamRuns} | {homeTeam} {homeTeamRuns}
      <div>
     {status} | {moment(time).calendar()}
      </div>
    </div>
    <div id="bet-summary">
    selectedBet: {teamBetOn}, {winningTeam} won
    </div>
    <div id="bet-tokens">
      {result}
    </div>
  </div>
    )
  }
}

export default PastBet;