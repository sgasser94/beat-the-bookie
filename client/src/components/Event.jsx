import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('eventprops', this.props);
    const {
      id,
      status,
      time,
      homeTeam,
      awayTeam,
      pointSpread,
      awayML,
      homeML,
      overUnder,
      inning,
      homeTeamRuns,
      homeTeamHits,
      homeTeamErrors,
      awayTeamRuns,
      awayTeamHits,
      awayTeamErrors,
      stadium
    } = this.props;
    const awayRL = awayML < 0 ? 0 - pointSpread : pointSpread;
    const homeRL = homeML < 0 ? 0 - pointSpread : pointSpread;
    return (
      <div id="event">
        <div id="teams-date-location">
          <strong>{awayTeam} ({awayML > 0 ? `+${awayML}` : awayML}) {awayML < 0 && pointSpread ? pointSpread : ''} @ {homeTeam} ({homeML > 0 ? `+${homeML}` : homeML})</strong>
        {time}, Stadium ID {stadium}
        </div>
        <div id="odds-bet-button">
          <div id="odds">
            <div id="ou">O/U: {overUnder}</div>
            <div id="spread">
              {pointSpread ? (
                <div id="spread">Spread: {pointSpread}</div>
              ) : ''}
            </div>
          </div>
          <div id="bet-button-wrapper">
            <button id="bet-button">BET</button>
          </div>
        </div>
      </div>

    )
  }
}


export default Event;
{/*<div id="event">
  <h4>{awayTeam} @ {homeTeam}</h4>
  <p>{time}</p>
  <p>{status}</p>
</div>*/}