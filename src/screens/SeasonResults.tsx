import React from 'react';

import { urls } from '../constants/app.config';
import fetchResource from '../helpers/fetchResource';
import Wrapper from '../components/Wrapper/Wrapper';
import Header from '../components/Header/Header';

// const SeasonsResultList = (props) => fetchResource({
//   url: urls.seasonResult,
//   props
// })(List);

interface SeasonResultsProps {
  winner: string
}

const seasonResult = ({ winner }: SeasonResultsProps) =>  (
  <Wrapper>
    <Header title={`Season result`}/>
    {/* <SeasonsResultList winner={winner}/> */}
  </Wrapper>
);

export default seasonResult;
