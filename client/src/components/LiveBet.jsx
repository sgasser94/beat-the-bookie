import React from 'react';

class LiveBet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props', this.props);
    const {
      awayTeam,
      gameId,
      homeTeam,
      payOut,
      selectedBet,
      status,
      time,
      wager
    } = this.props;
    const ML = (Math.floor(Math.random() * 300) + 100).toFixed(0);
    return (
    <div id="bet">
      <div id="game-summary">
        {awayTeam} @ {homeTeam}
        <div>
       {new Date(time).toString()}
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