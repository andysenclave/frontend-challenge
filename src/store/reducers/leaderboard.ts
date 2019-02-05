import {
  LEADERBOARD_FETCH_SUCCESS,
  SET_SEASON_CHAMPION,
  SEASON_RESULT_FETCH_SUCCESS
} from '../actionTypes';
import Leaderboard from '../../models/leaderboard';
import SeasonResult from '../../models/seasonResult';

export interface Props {
  data: Leaderboard[],
  seasonResults: SeasonResult[],
  championCode: string
}

const initialState: Props = {
  data: [],
  seasonResults: [],
  championCode: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LEADERBOARD_FETCH_SUCCESS:
      return {
        ...state,
        data: [...action.payload]
      };
    case SET_SEASON_CHAMPION:
      return {
        ...state,
        championCode: action.payload
      };
    case SEASON_RESULT_FETCH_SUCCESS:
      return {
        ...state,
        seasonResults: [...action.payload]
      };
    default:
      return state;
  }
}
