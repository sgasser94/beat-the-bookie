import React from 'react';
import $ from 'jquery';
import Event from './Event.jsx';
import Authorization from '../../../tokens.js';

class EventFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      sport: 'Select'
    };
    this.fetchEvents = this.fetchEvents.bind(this);
  }

  fetchEvents(target) {
    console.log('searching for', event.target.value);
    const url = `https://fly.sportsdata.io/v3/mlb/scores/json/GamesByDate/2021-MAY-18`;
    $.ajax({
      method: 'GET',
      url: '/mlbGames',
      success: (data) => {
        console.log('successful get', data);
        this.setState({
          events: data
        });
      },
      error: (err) => console.log('error', err)
    })

    // GET events for today
    // put all of those events into this.state.events array

  }

  render() {
    const { sport, events } = this.state;
    return (
      <>
        <div className="feed-summary">
          <label>
            Search Today's Events:
            <select onChange={this.fetchEvents}>
              <option value="search" disabled hidden>Search</option>
              <option value="baseball">MLB</option>
              <option value="basketball">NBA</option>
              <option value="football">NFL</option>
              <option value="hockey">NHL</option>
            </select>
          </label>
        </div>
        <div id="events-feed">
          {/* map through this.state.events */}
          {events.map((game) => {
            return <Event
              key={game.GameID}
              status={game.Status}
              time={game.DateTime}
              homeTeam={game.HomeTeam}
              awayTeam={game.AwayTeam}
              pointSpread={game.pointSpread}
              awayML={game.PointSpreadAwayTeamMoneyLine}
              homeML={game.PointSpreadHomeTeamMoneyLine}
              overUnder={game.OverUnder}
              inning={game.Inning}
              />
          })}
        </div>
      </>
    )
  }
}

export default EventFeed;