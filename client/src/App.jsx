import React from 'react';
import Dashboard from './components/Dashboard.jsx';
import ActionFeed from './components/ActionFeed.jsx';
import EventFeed from './components/EventFeed.jsx';
import HistoryFeed from './components/HistoryFeed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // dateValue: "2021-05-19"
    };
  }

  // fetchEvents() {
  //   const { dateValue } = this.state;
  //   $.ajax({
  //     method: 'GET',
  //     url: `/mlbGames?date=${dateValue}`,
  //     success: (data) => {
  //       this.setState({
  //         events: data
  //       }, this.props.updateActionFeed(data));
  //     },
  //     error: (err) => console.log('error', err)
  //   })
  // }

  render() {
    return (
      <div id="app">
        <div className="dashboard">
          <Dashboard />
        </div>
        <div className="feeds">
          <div id="event-half">
            <EventFeed />
          </div>
          <div id="action-half">
            <ActionFeed liveData={this.state.games} />
            <HistoryFeed />
          </div>
        </div>
      </div>
    )
  }
}

export default App;