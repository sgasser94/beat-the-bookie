import React from 'react';

class PastBet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ML = (Math.floor(Math.random() * 300) + 100);
    const wagers = [50, 80, 100, 125, 150, 200];
    const wager = wagers[Math.floor(Math.random() * 5)];

    return (
    <div id="bet">
    <div id="game-summary">
      Lakers @ Celtics
      <div>
     {Date.now()}
      </div>
    </div>
    <div id="bet-summary">
    Mariners ML +{ML}
    </div>
    <div id="bet-tokens">
      Bet {wager}, won {Math.floor((wager / 100) * (100 * (ML / 100)))}
    </div>
  </div>
    )
  }
}

export default PastBet;