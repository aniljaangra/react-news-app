/**
 * Created by Anil Jangra on 5/22/2021
 */
import React, {
  useRef, useState, useReducer, useEffect,
} from 'react';
import NewsList from '../NewsList/NewsList';
import Header from '../Header/Header';
import reducer from './reducer';
import useFetch from '../util/hooks/useFetch';
import useIntersectionObserver from '../util/hooks/useIntersectionObserver';
import { resetData } from './actions';

function NewsApp() {
  const [query, setQuery] = useState('');
  const [page, setPageNumber] = useState(1);
  const bottomRef = useRef(null);

  const [news, newsDispatch] = useReducer(reducer, {
    articles: [], fetching: false, error: '', hasMore: true,
  });

  useFetch({ query, page, hasMore: news.hasMore }, newsDispatch);

  const articleRef = useRef(news.articles);
  useEffect(() => {
    articleRef.current = news.articles;
  }, [news.articles]);

  const onIntersect = () => {
    if (articleRef.current.length === 0) return;
    setPageNumber((prevValue) => prevValue + 1);
  };
  useIntersectionObserver(bottomRef, onIntersect);

  const onSearch = (searchText) => {
    if (searchText) {
      newsDispatch(resetData());
      setQuery(searchText);
      setPageNumber(1);
    }
  };

  const onReset = () => {
    window.location.reload();
  };
  return (
    <>
      <Header onSearchNews={onSearch} onReset={onReset} query={query} />
      <NewsList
        articles={news.articles}
        loading={news.fetching}
        query={query}
        error={news.error}
      />
      <div id="footer" className="mt-5 navbar bg-dark" ref={bottomRef} />
    </>
  );
}

export default NewsApp;
