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
    const field = document.getElementById('depositvalue');
    if (isNaN(field.value) || field.value === '') {
      field.value = '';
      return;
    }
    this.setState({
      tokens: parseInt(this.state.tokens) + parseInt(this.state.depositValue),
      depositValue: '',
    });
    field.value = '';
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
        <h1>Beat The Bookie</h1>


        <div id="username-balance-deposit">
          <div id="user-info">
          <div>Sam Gasser</div>
          <div>Tokens: {tokens}</div>
          </div>
          <div>
          <input type="text" id="depositvalue" value={this.depositValue} onChange={this.handleDepositValueChange} placeholder="$"></input>
          <button onClick={this.depositTokens}>Deposit</button>
          </div>
        </div>
      </>
    )
  }
}

export default Dashboard;