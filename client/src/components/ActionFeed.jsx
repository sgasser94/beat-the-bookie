import React from 'react';
import LiveBet from './LiveBet.jsx';

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
        <div id="action-feed-summary">
          <p>Live Tokens: {liveTokens}</p>
          <p>Projection: {projectedTokens} Tokens</p>
        </div>
        <div id="action-feed">
          <LiveBet />
          <LiveBet />
          <LiveBet />
          <LiveBet />
          <LiveBet />
          <LiveBet />
        </div>
      </div>
    )
  }
}

export default ActionFeed;