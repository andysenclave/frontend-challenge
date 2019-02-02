import React from 'react';
import { shallow } from 'enzyme';

import Hello from '../../src/components/Hello';

it('renders the heading', () => {
  const helloComponent = shallow(<Hello />);
  const heading = 'Hello from f1 leaderboard!';
  expect(helloComponent.find('h1').get(0).props.children).toEqual(heading);
});