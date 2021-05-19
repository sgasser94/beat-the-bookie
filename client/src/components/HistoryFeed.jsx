import React from 'react';
import PastBet from './PastBet.jsx';

class HistoryFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldBets: [],
      oldWins: []
    }
  }

  render() {
    const netTokens = (Math.random() * 10000).toFixed(2);
    return (
      <div id="history-container">
        <div id="history-feed-summary">
          <p>Past week: {netTokens} tokens</p>
          <p>Won 24% of bets (24/100)</p>
        </div>
        <div id="history-feed">
          <PastBet />
          <PastBet />
          <PastBet />
          <PastBet />
          <PastBet />
        </div>
      </div>
    )
  }
}

export default HistoryFeed;