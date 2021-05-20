import React from 'react';
import LiveBet from './LiveBet.jsx';
import $ from 'jquery';
import helper from '../../helpers/fetchers.js';

class ActionFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bets: [],
      games: []
    };

    this.getActiveBets = this.getActiveBets.bind(this);
    this.fetchLiveData = this.fetchLiveData.bind(this);
  }

  componentDidMount() {
    this.getActiveBets();
  }

  fetchLiveData() {
    const date = "2021-05-19";
    const { bets } = this.state;
    console.log('bets', bets);
    $.ajax({
      method: 'GET',
      url: `/mlbGames?date=2021-05-19`,
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
            }
          }
          liveBetGameData.push(liveBetObject);

        })
        console.log('LBGD', liveBetGameData);


        this.setState({
          games: liveBetGameData
        });
      },
      error: (err) => console.log(err),
    })
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
    const { bets, games } = this.state;

    return (
      <div id="action-container">
        <div id="action-feed-summary">
          <button onClick={this.fetchLiveData} id="refresh-live-data">Refresh</button>
          <p>Live Tokens: {this.calculateLiveTokens()}</p>
          <p>Projection: ?????</p>
        </div>
        <div id="action-feed">
          {games.map(game => {
            return <LiveBet
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

export default ActionFeed;