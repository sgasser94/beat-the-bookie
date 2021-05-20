import React from 'react';
import LiveBet from './LiveBet.jsx';
import $ from 'jquery';
import helper from '../../helpers/fetchers.js';

class ActionFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bets: [],
      games: [],
      endedGames: []
    };

    this.getActiveBets = this.getActiveBets.bind(this);
    this.fetchLiveData = this.fetchLiveData.bind(this);
    this.updateStatusOfCompleteGames = this.updateStatusOfCompleteGames.bind(this);
  }

  componentDidMount() {
    this.getActiveBets();
  }

  fetchLiveData() {
    const date = "2021-05-20";
    const { bets } = this.state;
    console.log('bets', bets);
    const gamesThatAreFinal = [];
    $.ajax({
      method: 'GET',
      url: `/mlbGames?date=2021-05-20`,
      success: (data) => {
        console.log('live', data);
        const liveBetGameData = [];
        bets.forEach(bet => {
          const liveBetObject = {
            gameId: bet.gameId,
            awayTeam: bet.awayTeam,
            homeTeam: bet.homeTeam,
            selectedBet: bet.selectedBet,
            wager: bet.wager,
            payOut: bet.payOut,
            time: bet.time,
          };
          for (let i = 0; i < data.length; i++) {
            if (data[i].GameID === liveBetObject.gameId) {
              liveBetObject.awayTeamRuns = data[i].AwayTeamRuns;
              liveBetObject.awayTeamHits = data[i].AwayTeamHits;
              liveBetObject.awayTeamErrors = data[i].AwayTeamErrors;
              liveBetObject.homeTeamRuns = data[i].HomeTeamRuns;
              liveBetObject.homeTeamHits = data[i].HomeTeamHits;
              liveBetObject.homeTeamErrors = data[i].HomeTeamErrors;
              liveBetObject.inning = data[i].Inning;
              liveBetObject.status = data[i].Status;
              if (data[i].Status === "Final") {
                gamesThatAreFinal.push(liveBetObject);
              }
            }

          }
          liveBetGameData.push(liveBetObject);
          console.log('gamesthatarefinal', gamesThatAreFinal);

        })
        console.log('LBGD', liveBetGameData);
        this.setState({
          games: liveBetGameData,
          endedGames: gamesThatAreFinal
        });
      },
      error: (err) => console.log(err),
    })
  }

  updateStatusOfCompleteGames() {
    const { endedGames } = this.state;
    console.log('endedgames');
    const endedGamePromises = [];
    endedGames.forEach(game => {
      $.ajax({
      method: 'PUT',
      url: `/mlbBets?gameId=${game.gameId}&awayRuns=${game.awayTeamRuns}&homeRuns=${game.homeTeamRuns}`,
      success: () => console.log('worked'),
      error: (err) => console.log('didntwork', err)
      })
    })
    // series of PUT requests
    // promisify all of them?
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
    const { games, bets } = this.state;
    let liveTokens = 0;
    if (games.length > 0) {
      for (var i = 0; i < games.length; i++) {
        liveTokens += parseInt(games[i].wager);
      }
      return liveTokens;
    } else {
      for (var i = 0; i < bets.length; i++) {
        liveTokens += parseInt(bets[i].wager);
      }
      return liveTokens;
    }
  }



  render() {
    const liveTokens = Math.floor(Math.random() * 10000);
    const projectedTokens = (liveTokens * (Math.random() * 20)).toFixed(2);
    const { bets, games } = this.state;

    return (
      <div id="action-container">
        <button onClick={this.updateStatusOfCompleteGames}id="updatecomplete">Update Status of Complete Games</button>
        <div id="action-feed-summary">
          Active Bets
          <button onClick={this.fetchLiveData} id="refresh-live-data">Refresh</button>
          <button onClick={this.getActiveBets} id="get-active-bets">Get Active Bets</button>
          <p>Live Tokens: {this.calculateLiveTokens()}</p>
        </div>
        <div id="action-feed">
          {games.length > 0 ? games.map(game => {
            return <LiveBet
              key={`${game.gameId}${game.wager}`}
              wager={game.wager}
              payOut={game.payOut}
              selectedBet={game.selectedBet}
              overUnder={game.overUnder}
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
          }) : bets.map(bet => {
            return <LiveBet
              key={`${bet.gameId}${bet.wager}`}
              wager={bet.wager}
              payOut={bet.payOut}
              selectedBet={bet.selectedBet}
              awayTeam={bet.awayTeam}
              homeTeam={bet.homeTeam}
              gameId={bet.gameId}
              status={bet.status}
              win={bet.win}
              time={bet.time}
              awayTeamRuns={bet.awayTeamRuns}
              awayTeamHits={bet.awayTeamHits}
              awayTeamErrors={bet.awayTeamErrors}
              homeTeamRuns={bet.homeTeamRuns}
              homeTeamHits={bet.homeTeamHits}
              homeTeamError={bet.homeTeamErrors}
              inning={bet.inning}
              />
          })}
        </div>
      </div>
    )
  }
}

export default ActionFeed;