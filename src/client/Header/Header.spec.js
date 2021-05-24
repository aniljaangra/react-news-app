/**
 * Created by Anil Jangra on 5/24/2021
 */
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import HeaderWrapper from './HeaderWrapper';
import SearchBar from './SearchBar';

describe('Header', () => {
  it('renders Header component correctly', () => {
    const wrapper = shallow(<Header onSearchNews={jest.fn()} onReset={jest.fn()} />);
    expect(wrapper.find(HeaderWrapper).length).toEqual(1);
    expect(wrapper.find(SearchBar).length).toEqual(1);
  });
});
