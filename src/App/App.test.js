import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { postRes } from '../apiCalls/apiCalls.js'


describe('App', () => {
  let wrapper;
  const mockPostRes = jest.fn();
  const mockRes = {
    id: Date.now(),
    name: 'Kim',
    date: '03/17',
    time: '7:00',
    number: '3',
  }
  beforeEach(() => {
    wrapper = shallow(<App postRes={mockPostRes}/>)
  })

  it('should be an instance of App component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call postRes with reservation', () => {
    wrapper.instance().addReservation()

    expect(wrapper.instance().postRes).toHaveBeenCalled()
  })
})
