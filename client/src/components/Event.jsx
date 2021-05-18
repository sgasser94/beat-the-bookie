import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="event">
        <h4>Dodgers @ Mariners</h4>
        <p>{Date.now()}</p>
        <p>T-Mobile Park</p>
        <p>Score: 0 | 0</p>
      </div>
    )
  }
}


export default Event;