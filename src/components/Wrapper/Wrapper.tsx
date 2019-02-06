import React, { ReactNode } from 'react';
import styled from 'styled-components';

const WrapElement = styled.section`
  padding: 2em;
  background: #74ebd5;
  background: -webkit-linear-gradient(to right, #ACB6E5, #74ebd5);
  background: linear-gradient(to right, #ACB6E5, #74ebd5);
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    padding: 1em;
  }
`;

interface WrapperProps {
  children: ReactNode;
}

const wrapper = ({ children }: WrapperProps) => (
  <WrapElement>
    { children }
  </WrapElement>
);

export default wrapper;
