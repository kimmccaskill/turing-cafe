import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should be an instance of App component', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
