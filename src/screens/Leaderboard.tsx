import React from 'react';

import { urls } from '../constants/app.config';
import fetchResource from '../helpers/fetchResource';

import Wrapper from '../components/Wrapper/Wrapper';
import Header from '../components/Header/Header';

// const LeaderBoardList = fetchResource({
//   url: urls.leaderboard
// })(List);

const leaderboard = () =>  (
  <Wrapper>
    <Header title={`Leaderboard`}/>
    {/* <LeaderBoardList /> */}
  </Wrapper>
);

export default leaderboard;
