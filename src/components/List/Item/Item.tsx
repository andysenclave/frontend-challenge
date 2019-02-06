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
  avatar?: string,
  title: string,
  subtext?: string,
  score?: string,
  scorePercent?: number,
  highlight?: boolean,
  icon?: string,
  onClick?: Function
}

const listItem = (props: ItemProps) => {
  const {
    highlight,
    icon,
    onClick,
    avatar,
    title,
    subtext,
    score,
    scorePercent
  } = props;
  console.log(icon);
  return (
    <ItemWrap active={highlight} onClick={onClick}>
      {avatar && <Avatar src={avatar} />}
      <Title>{ title }</Title>
      {subtext && <Subtext>{ subtext }</Subtext>}
      {score && <Score>{ score } wins</Score>}
      {scorePercent
        && (
        <ProgressBarWrapper>
          <Progress value={scorePercent} />
        </ProgressBarWrapper>
        )
      }
      {icon ? <Icon src={icon} /> : null}
    </ItemWrap>
  );
};

export default listItem;
