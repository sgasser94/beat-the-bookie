import React from 'react';
import Modal from './Modal.jsx'
import BetPopup from './BetPopup.jsx';
import moment from 'moment';


class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderModal: false
    };

    this.toggleBetModal = this.toggleBetModal.bind(this);
  }

  toggleBetModal() {
    this.setState({
      renderModal: !this.state.renderModal
    })
  }

  render() {
    const {
      id,
      status,
      time,
      homeTeam,
      awayTeam,
      pointSpread,
      awayML,
      homeML,
      overUnder,
      inning,
      homeTeamRuns,
      homeTeamHits,
      homeTeamErrors,
      awayTeamRuns,
      awayTeamHits,
      awayTeamErrors,
      stadium
    } = this.props;
    const betModal = this.state.renderModal ? (
      <div id="page-blocker">
        <Modal>
          <div>
            <BetPopup
              gameId={this.props.gameId}
              time={this.props.time}
              stadium={this.props.stadium}
              status={this.props.status}
              inning={this.props.inning}
              homeTeam={this.props.homeTeam}
              awayTeam={this.props.awayTeam}
              pointSpread={this.props.pointSpread}
              awayML={this.props.awayML}
              homeML={this.props.homeML}
              overUnder={this.props.overUnder}
              toggleBetModal={this.toggleBetModal}
            />
          </div>
        </Modal>
      </div>
    ) : '';
    const awayRL = awayML < 0 ? 0 - pointSpread : pointSpread;
    const homeRL = homeML < 0 ? 0 - pointSpread : pointSpread;
    return (
      <div id="event">
        {betModal}
        <div id="event-left-half">
          <div id="event-top-left">
            {status === 'InProgress' || status === 'Final' ? (<strong>{awayTeam} {awayTeamRuns} | {homeTeam} {homeTeamRuns} | {inning}/9</strong>) : (<strong>{awayTeam} ({awayML > 0 ? `+${awayML}` : awayML}) @ {homeTeam} ({homeML > 0 ? `+${homeML}` : homeML})</strong>)}
          </div>
          <div id="event-bottom-left">
            <div>
            {moment(time).format('LT')}

            </div>
          Location: {stadium}
          </div>

        </div>
        <div id="event-right-half">
          <div id="event-top-right">
            <div id="ou">O/U: {overUnder}</div>
            <div id="spread">Spread: {Math.abs(pointSpread)}</div>
          </div>
          <div id="event-bottom-right">
            {status === 'Scheduled' ? (
              <button id="bet-button" onClick={this.toggleBetModal}>BET</button>
            ) : ''}
          </div>
        </div>
      </div>
    )
  }
}


export default Event;
{/*<div id="event">
  <h4>{awayTeam} @ {homeTeam}</h4>
  <p>{time}</p>
  <p>{status}</p>
</div>*/}