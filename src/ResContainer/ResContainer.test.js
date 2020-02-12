import React from 'react';
import ResContainer from './ResContainer';
import { shallow } from 'enzyme';

describe('ResContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
    <ResContainer 
        reservations={[{
          "id": 1,
          "name": "Christie",
          "date": "12/29",
          "time": "7:00",
          "number": 12
    }]}
    />)
  })

  it('should be an instance of ResContainer component', () => {
    expect(wrapper).toMatchSnapshot();
  });
})