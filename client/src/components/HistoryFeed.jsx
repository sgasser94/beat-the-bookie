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
    const { oldBets, oldWins } = this.state;
    const netTokens = (Math.random() * 10000).toFixed(2);
    return (
      <div id="history-container">
        <div id="history-feed-summary">
          <p>Past week: {netTokens} tokens</p>
          <p>Won 24% of bets (24/100)</p>
        </div>
        <div id="history-feed">
          {/* {oldBets.map(result => {
            return <PastBet
              homeTeam={result.homeTeam}
              awayTeam={result.awayTeam}
              date={result.date}
              BET???
          })} */}
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