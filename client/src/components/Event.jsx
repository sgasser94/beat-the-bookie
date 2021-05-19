import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      status,
      time,
      homeTeam,
      awayTeam
    } = this.props;
    return (
      <div id="event">
        <div id="teams-date-location">
          <strong>Mariners (+150) @ Dodgers (-180)</strong>
        7:10pm, Dodger Stadium, Los Angeles, CA
        </div>
        <div id="odds-bet-button">
          <div id="odds">
            <div id="ou">O/U: 6.5</div>
            <div id="ml-rl">
              <div>SEA ML +150 | RL +2.5</div>
              <div>LAD ML -180 | RL -2.5</div>
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