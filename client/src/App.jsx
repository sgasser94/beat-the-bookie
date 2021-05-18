import React from 'react';
import Dashboard from './components/Dashboard.jsx';
import ActionFeed from './components/ActionFeed.jsx';
import EventFeed from './components/EventFeed.jsx';
import HistoryFeed from './components/HistoryFeed.jsx';


const App = () => (
  <>
    <div className="dashboard">
      <Dashboard />
    </div>
    <div className="feeds-container">
      <div id="event-half">
        <EventFeed />
      </div>
      <div id="action-half">
        <ActionFeed />
        <HistoryFeed />
      </div>
    </div>
  </>
)

export default App;