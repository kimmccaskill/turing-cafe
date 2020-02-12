import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form />)
  })

  it('should be an instance of Form component', () => {
    expect(wrapper).toMatchSnapshot();
  });
})