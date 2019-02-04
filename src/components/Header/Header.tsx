import React from 'react';
import {
  Container,
  Logo,
  SecondTitle,
  Title,
} from './styled';

interface HeaderProps {
  title: string,
  content?: string
};

const Subtitle = ({ text }) => text ? <SecondTitle>{ text }</SecondTitle> : null;

const header = (props: HeaderProps) => (
  <Container>
    <Title>
      { props.title }
    </Title>
    <Subtitle text={ props.content }/>
    <Logo />
  </Container>
)

export default header;