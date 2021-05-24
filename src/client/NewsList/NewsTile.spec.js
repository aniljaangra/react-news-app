/**
 * Created by Anil Jangra on 5/24/2021
 */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewsTile from './NewsTile/NewsTile';

describe('NewsTile', () => {
  const news = {
    title: 'sample news',
    description: 'sample description',
    url: 'https://localhost',
    urlToImage: 'http://localhost/image',
    source: {
      name: 'sample source',
    },
  };
  it('renders NewsTile component correctly', () => {
    const tree = shallow(<NewsTile news={news} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
