import reducer, { initialState } from '../leaderboard';
import * as actionTypes from '../../actionTypes';

describe('testing leaderboard reducer', () => {
  it('should have an initial state', () => {
    expect(reducer(undefined, { type: 'NOT_DEFINED' })).toEqual(initialState);
  });

  it('should update reducer with leaderboard data on successful data fetch', () => {

    const leaderboardData = [{
      code: 'MSC',
      champion: 'Michael Schumacher',
      year: '2000',
      wins: '9',
      winPercent: 52
    }];
    const getLeaderBoardAction = {
      type: actionTypes.LEADERBOARD_FETCH_SUCCESS,
      payload: leaderboardData
    };
    let newState = { ...initialState };
    newState.data = leaderboardData;
    expect(reducer(initialState, getLeaderBoardAction)).toEqual(newState);

    const getLeaderBoardFailedAction = {
      type: actionTypes.LEADERBOARD_FETCH_ERROR,
      message: 'Test message'
    };
    newState = { ...initialState };
    newState.fetchError.leaderboard = true;
    newState.errorMessage = 'Test message';
    expect(reducer(initialState, getLeaderBoardFailedAction)).toEqual(newState);

    const setChampionAction = {
      type: actionTypes.SET_SEASON_CHAMPION,
      payload: 'John Doe'
    };
    newState = { ...initialState };
    newState.championCode = 'John Doe';
    expect(reducer(initialState, setChampionAction)).toEqual(newState);

    const seasonResultData= [{
      winner: 'Michael Schumacher',
      raceName: 'Australian Grand Prix',
      winnerCode: 'MSC'
    }];
    const getSeasonResultAction = {
      type: actionTypes.SEASON_RESULT_FETCH_SUCCESS,
      payload: seasonResultData
    };
    newState = { ...initialState };
    newState.seasonResults = seasonResultData;
    newState.fetchError.seasonResult = false;
    expect(reducer(initialState, getSeasonResultAction)).toEqual(newState);

    const getSeasonResultFailedAction = {
      type: actionTypes.SEASON_RESULT_FETCH_ERROR,
      message: 'Test message'
    };
    newState = { ...initialState };
    newState.fetchError.seasonResult = true;
    newState.errorMessage = 'Test message';
    expect(reducer(initialState, getSeasonResultFailedAction)).toEqual(newState);
  });
});