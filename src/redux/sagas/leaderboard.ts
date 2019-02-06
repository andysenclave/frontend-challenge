import { call, put, takeLatest } from 'redux-saga/effects';

import {
  LEADERBOARD_REQUESTED,
  LEADERBOARD_FETCH_SUCCESS,
  LEADERBOARD_FETCH_ERROR,
  SEASON_RESULT_REQUESTED,
  SEASON_RESULT_FETCH_SUCCESS,
  SEASON_RESULT_FETCH_ERROR
} from '../actionTypes';
import { getLeaderboard, getSeasonResults } from '../../helpers/fetchResource';

export function* fetchLeaderboard() {
  try {
    const leaderboard = yield call(getLeaderboard);
    yield put({
      type: LEADERBOARD_FETCH_SUCCESS,
      payload: leaderboard
    });
  } catch (e) {
    yield put({
      type: LEADERBOARD_FETCH_ERROR,
      message: 'Error while fetching leaderboard data'
    });
  }
}

export function* fetchSeasonResults(action) {
  const season = action.payload;
  try {
    const seasonResult = yield call(getSeasonResults, season);
    yield put({
      type: SEASON_RESULT_FETCH_SUCCESS,
      payload: seasonResult
    });
  } catch (e) {
    yield put({
      type: SEASON_RESULT_FETCH_ERROR,
      message: 'Error while fetching season result data'
    });
  }
}

function* leaderboardSaga() {
  yield takeLatest(LEADERBOARD_REQUESTED, fetchLeaderboard);
  yield takeLatest(SEASON_RESULT_REQUESTED, fetchSeasonResults);
}

export default leaderboardSaga;
