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

  componentDidMount() {
    // get bets from database
    // get games from yesterday
    // iterate through today's games
      // iterate through bets
        // make object with game results and bet info
        // set state with all of those objects
        // those obects will be the props for each PastBet
  }

  render() {
    const { oldBets, oldWins } = this.state;
    const netTokens = (Math.random() * 10000).toFixed(2);
    // const netTokens = sum all wagers where score went over/under or correct team won

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
        </div>
      </div>
    )
  }
}

export default HistoryFeed;