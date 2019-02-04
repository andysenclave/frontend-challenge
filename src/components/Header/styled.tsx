import styled from 'styled-components';
import racingFlag from '../../assets/racingFlag.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

export const SecondTitle = styled.h2`
  font-size: 1em;
  color: brown;
`;

export const Logo = styled.div`
  width: 150px;
  height: 150px;
  background: url('${racingFlag}') no-repeat;
  background-size: contain;
`;