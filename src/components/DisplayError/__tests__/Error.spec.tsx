import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import DisplayError from '../Error';

describe('test Error component', () => {
  it('renders the correct error message', () => {
    const errorMessage = 'Test message';
    const errorComponent = shallow(<DisplayError message={errorMessage}/>);
    
    expect(errorComponent.text()).toEqual(errorMessage);
  });

  it('matches the snapshot', () => {
    const errorMessage = 'Test message';
    const tree = renderer.create(<DisplayError message={errorMessage}/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', 'red');
  });
});