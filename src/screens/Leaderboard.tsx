import React from 'react';

import { urls } from '../constants/app.config';
import fetchResource from '../helpers/fetchResource';

const LeaderBoardList = fetchResource(urls.leaderboard)(List);

const leaderboard = () =>  (
  <Wrapper>
    <Header />
    <LeaderBoardList />
  </Wrapper>
);

export default leaderboard;
