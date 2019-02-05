import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Leaderboard from './screens/Leaderboard';
import SeasonResults from './screens/SeasonResults';

const router = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Leaderboard} />
      <Route exact path="/results/:year" component={SeasonResults} />
    </Switch>
  </Router>
);

export default router;
