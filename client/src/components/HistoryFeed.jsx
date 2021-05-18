import React from 'react';
import PastBet from './PastBet.jsx';

class HistoryFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const netTokens = (Math.random() * 10000).toFixed(2);
    return (
      <div id="history-container">
        <div className="feed-summary">
          <p>Past week: {netTokens} tokens</p>
        </div>
        <div id="history-feed">
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