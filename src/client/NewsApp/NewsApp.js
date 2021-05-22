/**
 * Created by Anil Jangra on 5/22/2021
 */
import React, {
  useEffect, useRef, useState, useReducer,
} from 'react';
import NewsList from '../NewsList/NewsList';
import Header from '../Header/Header';
import reducer from './reducer';
import useFetch from '../util/hooks/useFetch';

function NewsApp() {
  const [query, setQuery] = useState('');
  const bottomRef = useRef(null);
  const [news, newsDispatch] = useReducer(reducer, { articles: [], fetching: false });
  useFetch({ query, page: 1 }, newsDispatch);

  const onSearch = (searchText) => {
    if (searchText) setQuery(searchText);
  };
  return (
    <>
      <Header onSearchNews={onSearch} />
      <NewsList articles={news.articles} loading={news.fetching} />
      <div id="rock-bottom" style={{ border: '1px solid red' }} ref={bottomRef} />
    </>
  );
}

export default NewsApp;
