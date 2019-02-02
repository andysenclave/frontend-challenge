import React from 'react';

import { urls } from '../constants/app.config';
import fetchResource from '../helpers/fetchResource';

const SeasonsResultList = (props) => fetchResource({
  url: urls.seasonResult,
  winner: props.winner
})(List);

interface SeasonResultsProps {
  winner: string
}

const seasonResult = ({ winner }: SeasonResultsProps) =>  (
  <Wrapper>
    <Header />
    <SeasonsResultList winner={winner}/>
  </Wrapper>
);

export default seasonResult;
