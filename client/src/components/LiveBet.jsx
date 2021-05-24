import React from 'react';
import moment from 'moment';

class LiveBet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      wager,
      payOut,
      selectedBet,
      awayTeam,
      homeTeam,
      gameId,
      status,
      win,
      time,
      awayTeamRuns,
      awayTeamHits,
      awayTeamErrors,
      homeTeamRuns,
      homeTeamHits,
      homeTeamError,
      inning,
      overUnder
    } = this.props;
    console.log('livebet', this.props);
    const ML = (Math.floor(Math.random() * 300) + 100).toFixed(0);
    let normalizedSelectedBet = '';
    if (selectedBet === 'awayML') {
      normalizedSelectedBet = `${awayTeam} ML`;
    } else if (selectedBet === 'homeML') {
      normalizedSelectedBet = `${homeTeam} ML`;
    } else if (selectedBet === 'over') {
      normalizedSelectedBet = `Over ${overUnder}`;
    } else {
      normalizedSelectedBet = `Under ${overUnder}`;
    }
    return (
      <div id="live-bet">
        <div id="game-info">
        <div id="game-summary">
          {(status === 'Scheduled' || status === undefined ? (`${awayTeam} @ ${homeTeam}`) : `${awayTeam} ${awayTeamRuns} | ${homeTeam} ${homeTeamRuns}  |
           ${status === 'InProgress' ? inning + '/9' : status }`)}
        </div>
        <div id="game-starttime">
          {moment(time).calendar()}
        </div>
        </div>
        <div id="bet-details">
          <div>
          {normalizedSelectedBet}
          </div>
          <div>
           {wager} to win {payOut}
          </div>
        </div>
      </div>
    )
  }
}

export default LiveBet;