import {
  LEADERBOARD_REQUESTED,
  SET_SEASON_CHAMPION,
  SEASON_RESULT_REQUESTED
} from '../actionTypes';

export const fetchLeaderboard = () => ({
  type: LEADERBOARD_REQUESTED
});

export const setSeasonChampion = code => ({
  type: SET_SEASON_CHAMPION,
  payload: code
});

export const fetchSeasonResult = year => ({
  type: SEASON_RESULT_REQUESTED,
  payload: year
});
