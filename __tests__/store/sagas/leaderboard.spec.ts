import { call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import {
  fetchSeasonResult as seasonResultActionCreator
} from '../../../src/redux/actions/leaderboard';

import {
  fetchLeaderboard,
  fetchSeasonResults
} from '../../../src/redux/sagas/leaderboard';

import {
  getLeaderboard,
  getSeasonResults
} from '../../../src/helpers/fetchResource';

const selectedSeason = '2013';
const seasonResultAction = seasonResultActionCreator(selectedSeason);

describe('get leaderboard and season results flow', () => {
  const leadGen = cloneableGenerator(fetchLeaderboard)();
  it('should call leaderboard resouce', () => {
    expect(leadGen.next().value).toEqual(call(getLeaderboard));
  }); 

  const seasonGen = cloneableGenerator(fetchSeasonResults)(seasonResultAction);
  it('should call season result resouce with 2013', () => {
    expect(seasonGen.next().value).toEqual(call(getSeasonResults, selectedSeason));
  });
});
