import React from 'react';

class LiveBet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props', this.props);
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
    <div id="bet">
      <div id="game-summary">
        {awayTeam} @ {homeTeam} | {status === 'final' ? status : `${inning}/9`} | {awayTeam} {awayTeamRuns} | {homeTeam} {homeTeamRuns}
        <div>
       {time}
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