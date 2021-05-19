import React from 'react';

class BetPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBet: 'awayML',
      wager: 0,
      payOut: 0
    }
    // this.selectBet = this.selectBet.bind(this);
    // // this.calculatePayout = this.calculatePayout.bind(this);
    // this.updateBetAmount = this.updateBetAmount.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.calculatePayout = this.calculatePayout.bind(this);
  }

  // selectBet() {
  //   this.setState({
  //     selectedBet: event.target.value
  //   })
  // }

  // updateBetAmount() {
  //   const { selectedBet } = this.state;
  //   const {
  //     homeML,
  //     awayML,
  //     overUnder
  //   } = this.props;
  //   console.log('selected bet', selectedBet);
  //   let betAmount = event.target.value;
  //   let payoutAmount = 0;
  //   if (selectedBet === 'homeML') {
  //     console.log('homeml', homeML)
  //     if (parseInt(homeML) > 0) {
  //       payoutAmount = parseInt(betAmount) + (parseInt(betAmount) * (parseInt(homeML) / 100));
  //     } else {
  //       payoutAmount = parseInt(betAmount) + (parseInt(betAmount) * (100 / Math.abs(parseInt(homeML))));
  //     }
  //   } else if (selectedBet === 'awayML') {
  //     if (awayMLNumber > 0) {
  //       payoutAmount = parseInt(betAmount) + (parseInt(betAmount) * (awayMLNumber / 100));
  //     } else {
  //       payoutAmount = parseInt(betAmount) + (parseInt(betAmount) * (awayMLNumber) / 100);
  //     }
  //   } else if (selectedBet === 'over' || selectedBet === 'under') {
  //     payoutAmount = parseInt(betAmount) * 2;
  //   } else {
  //     console.log('else?');
  //   }

  //   this.setState({
  //     betAmount: parseInt(betAmount),
  //     payOut: payoutAmount.toFixed(2)
  //   }, () => console.log('state', this.state));
  // }

  handleChange() {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    }, () => this.calculatePayout());
  }

  calculatePayout() {
    const { selectedBet, wager } = this.state;
    const { awayML, homeML, overUnder } = this.props;
    const wagerNumber = parseInt(wager);
    const awayMLNumber = parseInt(awayML);
    const homeMLNumber = parseInt(homeML);
    const overUnderNumber = parseInt(overUnder);
    let payoutAmount = 0;
    if (selectedBet === 'homeML') {
      if (homeMLNumber > 0) {
        payoutAmount = wagerNumber + (wagerNumber * (homeMLNumber / 100));
      } else {
        payoutAmount = wagerNumber + (wagerNumber * (100 / Math.abs(homeMLNumber)));
      }
    } else if (selectedBet === 'awayML') {
      if (awayMLNumber > 0) {
        payoutAmount = wagerNumber + (wagerNumber * (awayMLNumber / 100));
      } else {
        payoutAmount = wagerNumber + (wagerNumber * (100 / Math.abs(homeMLNumber)));
      }
    } else if (selectedBet === 'over' || selectedBet === 'under') {
      payoutAmount = wagerNumber * 2;
    } else {
      console.log('else?');
    }
    this.setState({
      payOut: payoutAmount.toFixed(2)
    }, console.log(this.state));
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

    const homeLiveML = status === "InProgress" ? ' |  Live ML: Coming soon!' : '';
    const awayLiveML = status === "InProgress" ? ' |  Live ML: Coming soon!' : '';
    return (
      <div id="bet-modal">
        <div id="modal-content">
          <div id="modal-title">
            {awayTeam} @ {homeTeam}, {status}, StadiumID: {stadium}
          </div>
          <div id="modal-odds">
            Catalog:
            <div>
              {awayTeam}: {awayML} {awayLiveML}
            </div>
            <div>
              {homeTeam}: {homeML} {homeLiveML}
            </div>
            <div>
              Over/Under: {overUnder}
            </div>
          </div>
          <div id="bet-select">
            <select name="selectedBet" value={this.state.selectedBet} onChange={this.handleChange}>
              <option value="awayML">{awayTeam} {awayML}</option>
              <option value="homeML">{homeTeam} {homeML}</option>
              <option value="over">Over {overUnder}</option>
              <option value="under">Under {overUnder}</option>
            </select>
          </div>
          <div id="bet-amount">
            Bet:
            <input name="wager" type="text" placeholder="$" onChange={this.handleChange}></input>
            Payout:
            {this.state.payOut}

          </div>
        </div>
        <button onClick={toggleBetModal}>X</button>
      </div>
    )
  }
}

export default BetPopup;