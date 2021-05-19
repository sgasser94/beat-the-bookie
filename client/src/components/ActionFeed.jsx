import React from 'react';
import LiveBet from './LiveBet.jsx';
import $ from 'jquery';

class ActionFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bets: [],
    };

    this.getActiveBets = this.getActiveBets.bind(this);
  }

  componentDidMount() {
    this.getActiveBets();
  }

  getActiveBets() {
    $.ajax({
      method: 'GET',
      url: '/mlbBets',
      success: (data) => {
        this.setState({
          bets: data
        })
      },
      error: (err) => console.log('didnt get data', err)
    })
  }

  calculateLiveTokens() {
    const { bets } = this.state;
    let liveTokens = 0;
    for (var i = 0; i < bets.length; i++) {
      liveTokens += parseInt(bets[i].wager);
    }
    console.log('livetokens', liveTokens);
    return liveTokens;
  }



  render() {
    const liveTokens = Math.floor(Math.random() * 10000);
    const projectedTokens = (liveTokens * (Math.random() * 20)).toFixed(2);
    const { bets } = this.state;

    return (
      <div id="action-container">
        <div id="action-feed-summary">
          <p>Live Tokens: {this.calculateLiveTokens()}</p>
          <p>Projection: {projectedTokens} Tokens</p>
        </div>
        <div id="action-feed">
          {bets.map(bet => {
            return <LiveBet
              key={bet._id}
              wager={bet.wager}
              payOut={bet.payOut}
              selectedBet={bet.selectedBet}
              awayTeam={bet.awayTeam}
              homeTeam={bet.homeTeam}
              gameId={bet.gameId}
              status={bet.status}
              win={bet.win}
              time={bet.time}
            />
          })}
        </div>
      </div>
    )
  }
}

export default ActionFeed;