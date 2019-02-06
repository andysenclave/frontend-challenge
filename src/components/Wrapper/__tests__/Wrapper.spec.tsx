import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

describe('test Error component', () => {
  it('renders the Wrapper with correct children', () => {
    const testNode = "<p>Test</p>";
    const wrapperComponent = shallow(
      <Wrapper>
        <p>Test</p>
      </Wrapper>
    );
    
    expect(wrapperComponent.children().html()).toEqual(testNode);
  });
});