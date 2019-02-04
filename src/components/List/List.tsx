import React from 'react';
import { Link } from 'react-router-dom';

import Item from './Item/Item';

interface Item {
  avatar: string,
  title: string,
  subtext?: string,
  score?: string,
  scorePercent?: number,
  highlight?: boolean,
  icon?: string,
  url?: string
};

interface ListProps {
  items: Item[],
  type?: string
}

const LinkList = ({ items }) => {
  return items.map((options) => (
    <Link to={options.url} key={options.title}>
      <Item 
        avatar={options.avatar}
        title={options.title}
        subtext={options.subtext}
        score={options.score}
        scorePercent={options.scorePercent}
        highlight={options.highlight}
        icon={options.icon}
      />
    </Link>
  ));
}

const ItemList = ({ items }) => {
  return items.map(options =>
    <Item 
      key={options.title}
      avatar={options.avatar}
      title={options.title}
      subtext={options.subtext}
      score={options.score}
      scorePercent={options.scorePercent}
      highlight={options.highlight}
      icon={options.icon}
    />
  );
}

const list = (props: ListProps) => {
  const { items, type } = props;
  return type === 'link' || type === 'Link'
    ? <LinkList items={items} />
    : <ItemList items={items} />
};


export default list;