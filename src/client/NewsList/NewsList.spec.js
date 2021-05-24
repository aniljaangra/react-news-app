/**
 * Created by Anil Jangra on 5/24/2021
 */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewsList from './NewsList';
import NewsTile from './NewsTile/NewsTile';

describe('NewsTile', () => {
  const articles = [{
    title: 'sample news',
    description: 'sample description',
    url: 'https://localhost',
    urlToImage: 'http://localhost/image',
    source: {
      name: 'sample source',
    },
  }];
  it('renders NewsList component correctly', () => {
    const tree = shallow(<NewsList articles={articles} error="" query="" loading={false} />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders loading when initial set of articles are loading', () => {
    const wrapper = shallow(<NewsList articles={[]} error="" query="" loading />);
    expect(wrapper.text()).toContain('Loading');
  });

  it('renders NewsTile when initial set of articles is loaded', () => {
    const wrapper = shallow(<NewsList articles={articles} error="" query="" loading={false} />);
    expect(wrapper.find(NewsTile).length).toEqual(1);
  });

  it('should show error when there is error loading API data', () => {
    const wrapper = shallow(<NewsList articles={[]} error="error" query="" loading={false} />);
    expect(wrapper.text()).toEqual('Failed to load the News.');
  });

  it('should show query when there is query based search', () => {
    const wrapper = shallow(<NewsList articles={[]} error="" query="search query" loading={false} />);
    expect(wrapper.text()).toContain('search query');
  });
});
