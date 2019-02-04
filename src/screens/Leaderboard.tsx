import React from 'react';

import { urls } from '../constants/app.config';
import fetchResource from '../helpers/fetchResource';
import Wrapper from '../components/Wrapper/Wrapper';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Trophy from '../assets/trophy.svg';

// const LeaderBoardList = fetchResource({
//   url: urls.leaderboard
// })(List);

const items = [{
  avatar: 'https://via.placeholder.com/64x64?text=AM',
  title: 'Anindya Mukherjee',
  subtext: '2013',
  score: '8/10',
  scorePercent: 77,
  highlight: true,
  icon: Trophy
}]

const leaderboard = () =>  (
  <Wrapper>
    <Header title={`Leaderboard`}/>
    <List items={items}/>
  </Wrapper>
);

export default leaderboard;
