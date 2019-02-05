import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  LEADERBOARD_REQUESTED,
  LEADERBOARD_FETCH_SUCCESS,
  SEASON_RESULT_REQUESTED,
  SEASON_RESULT_FETCH_SUCCESS
} from '../actionTypes';
import { getLeaderboard, getSeasonResults } from '../../helpers/fetchResource';

function* fetchLeaderboard() {
  try {
    const leaderboard = yield call(getLeaderboard);
    yield put({
      type: LEADERBOARD_FETCH_SUCCESS,
      payload: leaderboard
    });
  } catch (e) {
    console.error(e);
    // yield put({
    //   type: 'STAR_WARS_INCREMENT_FAIL', message: e.message
    // });
  }
}

function* fetchSeasonResults(action) {
  const season = action.payload;
  try {
    const seasonResult = yield call(getSeasonResults, season);
    yield put({
      type: SEASON_RESULT_FETCH_SUCCESS,
      payload: seasonResult
    });
  } catch (e) {
    console.error(e);
    // yield put({
    //   type: 'STAR_WARS_INCREMENT_FAIL', message: e.message
    // });
  }
}

function* leaderboardSaga() {
  yield takeLatest(LEADERBOARD_REQUESTED, fetchLeaderboard);
  yield takeLatest(SEASON_RESULT_REQUESTED, fetchSeasonResults);
}

export default leaderboardSaga;
