import React from 'react';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderDeposit: false,
      tokens: 0,
      depositValue: 0
    }
    this.toggleRenderDeposit = this.toggleRenderDeposit.bind(this);
    this.depositTokens = this.depositTokens.bind(this);
    this.handleDepositValueChange = this.handleDepositValueChange.bind(this);
  }

  depositTokens() {
    this.setState({
      tokens: parseInt(this.state.tokens) + parseInt(this.state.depositValue),
    });
    this.toggleRenderDeposit();

  }

  handleDepositValueChange(event) {
    this.setState({
      depositValue: parseInt(event.target.value)
    })
  }

  toggleRenderDeposit(event) {
    this.setState({
      renderDeposit: !this.state.renderDeposit,
    })
  }

  render() {
    const { renderDeposit, tokens, toggleButtonText } = this.state;
    return (
      <>
      <h3>Beat The Bookie</h3>
      <p>Sam Gasser</p>
      <p>Tokens: {tokens}</p>
      {
        renderDeposit &&
        <div id="add-tokens">
          <input type="text" onChange={this.handleDepositValueChange} placeholder="$"></input>
          <button onClick={this.depositTokens}>Deposit</button>
        </div>
      }
      <button onClick={this.toggleRenderDeposit}>{ renderDeposit ? 'Close' : 'Add Tokens' }</button>
      </>
    )
  }
}

export default Dashboard;