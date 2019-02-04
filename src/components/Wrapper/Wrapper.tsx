import React, { ReactNode } from 'react';
import styled from 'styled-components';

const WrapElement = styled.section`
  padding: 2em;
  background: papayawhip;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

interface WrapperProps {
  children: ReactNode;
}

const wrapper = (props: WrapperProps) => (
  <WrapElement>
    { props.children }
  </WrapElement>
);

export default wrapper;
