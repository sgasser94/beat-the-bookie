import React from 'react';
import PastBet from './PastBet.jsx';
import $ from 'jquery';

class HistoryFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldBets: [],
      oldWins: []
    }

    this.getCompleteBets = this.getCompleteBets.bind(this);
  }

  componentDidMount() {
    this.getCompleteBets();
    // get bets from database
    // get games from yesterday
    // iterate through today's games
      // iterate through bets
        // make object with game results and bet info
        // set state with all of those objects
        // those obects will be the props for each PastBet
  }

  getCompleteBets() {
    $.ajax({
      method: 'GET',
      url: '/mlbBetsComplete',
      success: (data) => {
        this.setState({
          oldBets: data
        })
      },
      error: (err) => console.log('didnt get data', err)
    })
  }

  render() {
    const { oldBets, oldWins } = this.state;
    const netTokens = (Math.random() * 10000).toFixed(2);
    // const netTokens = sum all wagers where score went over/under or correct team won

    return (
      <div id="history-container">
        <div id="history-feed-summary">
          Past Bets
        </div>
        <div id="history-feed">
          {oldBets.map(game => {
            return <PastBet
            key={`${game.gameId}${game.wager}`}
            wager={game.wager}
            payOut={game.payOut}
            selectedBet={game.selectedBet}
            awayTeam={game.awayTeam}
            homeTeam={game.homeTeam}
            gameId={game.gameId}
            status={game.status}
            win={game.win}
            time={game.time}
            awayTeamRuns={game.awayTeamRuns}
            awayTeamHits={game.awayTeamHits}
            awayTeamErrors={game.awayTeamErrors}
            homeTeamRuns={game.homeTeamRuns}
            homeTeamHits={game.homeTeamHits}
            homeTeamError={game.homeTeamErrors}
            inning={game.inning}
              />
          })}
        </div>
      </div>
    )
  }
}

export default HistoryFeed;