import React from 'react';
import Reservation from './Reservation';
import { shallow } from 'enzyme';

describe('Reservation', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
    <Reservation 
      details={[{
          "id": 1,
          "name": "Christie",
          "date": "12/29",
          "time": "7:00",
          "number": 12
    }]}
    />)
  })

  it('should be an instance of Reservation component', () => {
    expect(wrapper).toMatchSnapshot();
  });
})