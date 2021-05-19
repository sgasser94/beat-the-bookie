import React from 'react';

class LiveBet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ML = (Math.floor(Math.random() * 300) + 100).toFixed(0);
    return (
    <div id="bet">
      <div id="game-summary">
        Mariners @ Dodgers
        <div>
       {Date.now()}
        </div>
      </div>
      <div id="bet-summary">
      Mariners ML +{ML}
      </div>
      <div id="bet-tokens">
        100 to win {Math.floor(100 * (ML / 100))}
      </div>
    </div>
    )
  }
}

export default LiveBet;