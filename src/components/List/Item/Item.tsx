import React from 'react';

import {
  ItemWrap,
  Avatar,
  Title,
  Subtext,
  Score,
  ProgressBarWrapper,
  Progress,
  Icon
} from './styled';

interface ItemProps {
  avatar: string,
  title: string,
  subtext?: string,
  score?: string,
  scorePercent?: number,
  highlight?: boolean,
  icon?: string
}

const listItem = (props: ItemProps) => {
  const { icon } = props;
  return (
    <ItemWrap active={props.highlight}>
      <Avatar url={props.avatar}/>
      <Title>{ props.title }</Title>
      {props.subtext && <Subtext>{ props.subtext }</Subtext>}
      {props.score && <Score>{ props.score }</Score>}
      {props.scorePercent && 
        <ProgressBarWrapper>
          <Progress value={ props.scorePercent }/>
        </ProgressBarWrapper>
      }
      {icon ? <Icon source={icon}/> : null}
    </ItemWrap>
  );
};

export default listItem;
