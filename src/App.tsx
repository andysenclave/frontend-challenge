import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Leaderboard from './screens/Leaderboard';
import SeasonResults from './screens/SeasonResults';

class App extends Component<React.Component> {
  state = {
    seasonWinner: ''
  };

  render () {
    const { seasonWinner } = this.state;

    return (
      <Router>
        <div className='app'>
          <Route exact path="/" component={Leaderboard} />
          <Route exact path="/details/:id" component={() => <SeasonResults winner={seasonWinner} />} />
        </div>
      </Router>
    );
  }
}

export default App;