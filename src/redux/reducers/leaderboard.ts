import {
  LEADERBOARD_FETCH_SUCCESS,
  SET_SEASON_CHAMPION,
  SEASON_RESULT_FETCH_SUCCESS,
  LEADERBOARD_FETCH_ERROR,
  SEASON_RESULT_FETCH_ERROR
} from '../actionTypes';
import Leaderboard from '../../models/leaderboard';
import SeasonResult from '../../models/seasonResult';

export interface Props {
  data: Leaderboard[],
  seasonResults: SeasonResult[],
  championCode: string,
  fetchError: {
    leaderboard: boolean,
    seasonResult: boolean
  },
  errorMessage: string,
}

const initialState: Props = {
  data: [],
  seasonResults: [],
  championCode: '',
  fetchError: {
    leaderboard: false,
    seasonResult: true
  },
  errorMessage: ''
};

export default function (state = initialState, action) {
  const { fetchError } = state;
  const updatedErrorState = { ...fetchError };

  switch (action.type) {
    case LEADERBOARD_FETCH_SUCCESS:
      updatedErrorState.leaderboard = false;

      return {
        ...state,
        data: [...action.payload],
        fetchError: updatedErrorState,
        errorMessage: ''
      };
    case LEADERBOARD_FETCH_ERROR:
      updatedErrorState.leaderboard = true;

      return {
        ...state,
        fetchError: updatedErrorState,
        errorMessage: action.message
      };
    case SET_SEASON_CHAMPION:
      return {
        ...state,
        championCode: action.payload
      };
    case SEASON_RESULT_FETCH_SUCCESS:
      updatedErrorState.seasonResult = false;

      return {
        ...state,
        seasonResults: [...action.payload],
        fetchError: updatedErrorState,
        errorMessage: ''
      };
    case SEASON_RESULT_FETCH_ERROR:
      updatedErrorState.seasonResult = true;

      return {
        ...state,
        fetchError: updatedErrorState,
        errorMessage: action.message
      };
    default:
      return state;
  }
}
