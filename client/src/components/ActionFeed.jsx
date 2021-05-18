import React from 'react';
import LiveBet from './Bet.jsx';

class ActionFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bets: [],
    };
  }

  render() {
    const liveTokens = Math.floor(Math.random() * 10000);
    const projectedTokens = (liveTokens * (Math.random() * 20)).toFixed(2);
    return (
      <div id="action-container">
        <div className="feed-summary">
          <p>Live tokens: {liveTokens}</p>
          <p>Projected net: {projectedTokens}</p>
        </div>
        <div id="action-feed">
          <LiveBet />
        </div>
      </div>
    )
  }
}

export default ActionFeed;