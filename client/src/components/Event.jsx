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
        <h4>{awayTeam} @ {homeTeam}</h4>
        <p>{time}</p>
        <p>{status}</p>
      </div>
    )
  }
}


export default Event;