import React from 'react';

class Bet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div id="bet">
      <p>Mariners ML +{Math.floor(Math.random() * 1000) + 100}</p>
    </div>
    )
  }
}

export default Bet;