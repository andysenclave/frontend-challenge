import { all } from 'redux-saga/effects';
import leaderboardSaga from './leaderboard';

function* rootSaga() {
  yield all([
    leaderboardSaga()
  ]);
}

export default rootSaga;
