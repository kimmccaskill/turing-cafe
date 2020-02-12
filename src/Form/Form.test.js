import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper;
  const mockEvent = {
    preventDefault: jest.fn(),
  };
  const mockAddRes = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form addRes={mockAddRes} />)
  })

  it('should be an instance of Form component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('updateChange', () => {
    it('should change state of name if form is updated', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'name',
          value: 'Kim'
        }
      };
      wrapper.instance().updateChange(mockEvent)
      expect(wrapper.state('name')).toEqual('Kim')
    })
  
    it('should change state of date if form is updated', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'date',
          value: '03/17'
        }
      }
  
      wrapper.instance().updateChange(mockEvent)
      expect(wrapper.state('date')).toEqual('03/17')
    })
  })

  describe('submitReservation', () => {
    it('should run addRes upon submitting reservation', () => {
      wrapper.instance().submitReservation(mockEvent)

      expect(wrapper.instance().props.addRes).toHaveBeenCalled()
    })

    it('should clear state upon submitting reservation', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'name',
          value: 'Kim'
        }
      };
      wrapper.instance().updateChange(mockEvent)
      wrapper.instance().submitReservation(mockEvent)
      expect(wrapper.state()).toEqual({
        id: Date.now(),
        name: '',
        date: '',
        time: '',
        number: '',
      })
    })
  })
})