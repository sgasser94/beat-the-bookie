import React from 'react';

class BetPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const {
      gameId,
      time,
      stadium,
      status,
      inning,
      homeTeam,
      awayTeam,
      pointSpread,
      awayML,
      homeML,
      overUnder,
      toggleBetModal
    } = this.props;
    console.log(this.props);
    return (
      <div id="bet-modal">
        <div id="modal-content">
        {gameId}, {time}, {stadium}, status: {status}, {awayML}, {homeML}
          </div>
        <button onClick={toggleBetModal}>X</button>
      </div>
    )
  }
}

export default BetPopup;