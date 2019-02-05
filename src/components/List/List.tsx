import React from 'react';
import { Link } from 'react-router-dom';

import Item from './Item/Item';

interface ListProps {
  items: Object,
  type?: string
}

const LinkList = ({ items }) => items.map(options => (
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

const ItemList = ({ items }) => items.map(options => (
  <Item
    key={`${options.title}-item`}
    avatar={options.avatar}
    title={options.title}
    subtext={options.subtext}
    score={options.score}
    scorePercent={options.scorePercent}
    highlight={options.highlight}
    icon={options.icon}
  />
));

const list = (props: ListProps) => {
  const { items, type } = props;
  return type === 'link' || type === 'Link'
    ? <LinkList items={items} />
    : <ItemList items={items} />;
};


export default list;
