import React from 'react';
import Bet from './Bet.jsx';

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
        <div id="feed-summary">
          <p>Live tokens: {liveTokens}</p>
          <p>Projected net: {projectedTokens}</p>
        </div>
        <div id="action-feed">
          <Bet />
        </div>
      </div>
    )
  }
}

export default ActionFeed;