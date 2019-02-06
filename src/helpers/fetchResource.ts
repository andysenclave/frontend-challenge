import axios from 'axios';

import { urls } from '../constants/app.config';
import LeaderboardModel from '../models/leaderboard';
import SeasonResultModel from '../models/seasonResult';

// eslint-disable-next-line
const getLeaderboardModelFromData = (res):Array<LeaderboardModel> => {
  const { StandingsLists } = res.data.MRData.StandingsTable;

  const leaderboard = StandingsLists.reduce((results, currentResult) => {
    // extracting data according to leaderboard model
    const {
      round,
      season,
      DriverStandings
    } = currentResult;
    const {
      Driver: {
        code,
        familyName,
        givenName
      },
      wins
    } = DriverStandings[0];

    // remodeling data
    const data = {
      code,
      champion: `${givenName} ${familyName}`,
      year: season,
      wins,
      winPercent: parseInt(wins, 10) / parseInt(round, 10) * 100
    };
    results.push(data);
    return results;
  }, []);

  return leaderboard;
};

const getSeasonResultModelFromData = (res):Array<SeasonResultModel> => {
  const { Races } = res.data.MRData.RaceTable;

  const races = Races.reduce((results, currentResult) => {
    // extracting data according to season results model
    const {
      raceName,
      Results
    } = currentResult;
    const {
      Driver: {
        code,
        familyName,
        givenName
      }
    } = Results[0];

    // remodeling data
    const data = {
      winnerCode: code,
      winner: `${givenName} ${familyName}`,
      raceName
    };
    results.push(data);
    return results;
  }, []);

  return races;
};

export const getLeaderboard = () => {
  const { ergast: { base, leaderboardSuffix } } = urls;
  return axios.get(`${base}${leaderboardSuffix}`)
    .then(res => getLeaderboardModelFromData(res));
};

export const getSeasonResults = (season) => {
  const { ergast: { base, seasonResultSuffix } } = urls;
  return axios.get(`${base}${season}${seasonResultSuffix}`)
    .then(res => getSeasonResultModelFromData(res));
};
