import React from 'react';
import Event from './Event.jsx';

class EventFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  fetchEvents(target) {
    console.log('searching for', event.target.value);
  }

  render() {
    return (
      <div id="events">
        <div id="events-select">
          <label>
            Search Today's Events:
            <select onChange={this.fetchEvents}>
              <option value="baseball">MLB</option>
              <option value="basketball">NBA</option>
              <option value="football">NFL</option>
              <option value="golf">PGA</option>
              <option value="hockey">NHL</option>
            </select>
          </label>
        </div>
        <div id="events-feed">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    )
  }
}

export default EventFeed;