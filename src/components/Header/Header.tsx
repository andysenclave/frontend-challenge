import React from 'react';
import {
  Container,
  Logo,
  Subtitle,
  Title,
} from './styled';

interface HeaderProps {
  title: string,
  content?: string
}

const header = ({ title, content }: HeaderProps) => (
  <Container>
    <Logo />
    <Title>
      { title }
    </Title>
    <Subtitle>
      { content }
    </Subtitle>
  </Container>
);

export default header;
