import React from 'react';
import $ from 'jquery';
import Event from './Event.jsx';
import Authorization from '../../../tokens.js';

class EventFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      dateValue: "2021-05-19"
    };
    this.fetchEvents = this.fetchEvents.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      dateValue: event.target.value
    })
  }

  fetchEvents(target) {
    const { dateValue } = this.state;
    $.ajax({
      method: 'GET',
      url: `/mlbGames?date=${dateValue}`,
      success: (data) => {
        this.setState({
          events: data
        });
      },
      error: (err) => console.log('error', err)
    })
  }

  render() {
    const { sport, events } = this.state;

    return (
      <>
        <div className="event-feed-summary">
          <label>Browse Events: </label>
            <input onChange={this.handleChange} type="date" value={this.state.dateValue} min="2021-04-01" max="2021-09-01"/>
            <button id="event-search" onClick={this.fetchEvents}>Search</button>
        </div>

        <div id="events-feed">
          {/* map through this.state.events */}
          {events.map((game) => {
            return <Event
              key={game.GameID}
              gameId={game.GameID}
              status={game.Status}
              time={game.DateTime}
              homeTeam={game.HomeTeam}
              awayTeam={game.AwayTeam}
              pointSpread={game.PointSpread}
              awayML={game.PointSpreadAwayTeamMoneyLine}
              homeML={game.PointSpreadHomeTeamMoneyLine}
              overUnder={game.OverUnder}
              inning={game.Inning}
              homeTeamRuns={game.HomeTeamRuns}
              homeTeamHits={game.HomeTeamHits}
              homeTeamErrors={game.HomeTeamErrors}
              awayTeamRuns={game.AwayTeamRuns}
              awayTeamHits={game.AwayTeamHits}
              awayTeamErrors={game.AwayTeamErorrs}
              stadium={game.StadiumID}
              />
          })}
          {/* <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event /> */}
        </div>
      </>
    )
  }
}

export default EventFeed;