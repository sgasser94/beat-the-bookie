import React from 'react';
import moment from 'moment';

class LiveBet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    const ML = (Math.floor(Math.random() * 300) + 100).toFixed(0);
    return (
    <div id="live-bet">
      <div id="game-summary">
        {awayTeam} @ {homeTeam} | {status === 'Final'  || 'Scheduled' ? status : `${inning}/9`} | {awayTeam} {awayTeamRuns} | {homeTeam} {homeTeamRuns}
        <div>
       {moment(time).calendar()}
        </div>
      </div>
      <div id="bet-tokens">
        {wager} to win {payOut}
      </div>
    </div>
    )
  }
}

export default LiveBet;