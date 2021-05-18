import React from 'react';

class PastBet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div id="bet">
      <p>Lakers ML -{Math.floor(Math.random() * 1000) + 100}</p>
    </div>
    )
  }
}

export default PastBet;