import { combineReducers } from 'redux';

import LeaderboardReducer from './leaderboard';

const rootReducer = combineReducers({
  leaderboard: LeaderboardReducer
});

export default rootReducer;
