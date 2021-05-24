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
      result = <div id="won-bet">${payOut}</div>
    } else {
      result = <div id="lost-bet">-${payOut}</div>
    }

    return (
      <div id="past-bet">
        <div id="past-game-info">
          <div id="past-game-summary">
            {awayTeam} {awayTeamRuns} | {homeTeam} {homeTeamRuns}
          </div>
          <div id="past-game-starttime">
            {status} | {moment(time).calendar()}
          </div>
        </div>
        <div id="past-bet-summary">
          <div>
          Bet: {teamBetOn} ML {wager} for {payOut}
          </div>
          <div>
          {winningTeam} won
          </div>
        </div>
        <div id="past-bet-tokens">
          {result}
        </div>
      </div>
    )
  }
}

export default PastBet;