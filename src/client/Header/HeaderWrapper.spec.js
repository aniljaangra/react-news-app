/**
 * Created by Anil Jangra on 5/24/2021
 */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HeaderWrapper from './HeaderWrapper';

describe('HeaderWrapper', () => {
  it('renders HeaderWrapper component correctly', () => {
    const wrapper = shallow(<HeaderWrapper onReset={jest.fn()} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
