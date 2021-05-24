/**
 * Created by Anil Jangra on 5/24/2021
 */
import { shallow } from 'enzyme';
import React from 'react';
import NewsApp from './NewsApp';
import Header from '../Header/Header';
import NewsList from '../NewsList/NewsList';

describe('NewsApp', () => {
  it('renders NewsApp component correctly', () => {
    const wrapper = shallow(<NewsApp />);
    expect(wrapper.find(Header).length).toEqual(1);
    expect(wrapper.find(NewsList).length).toEqual(1);
  });
});
