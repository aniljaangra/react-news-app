/**
 * Created by Anil Jangra on 5/22/2021
 */
import React, { useEffect, useState } from 'react';
import NewsList from '../NewsList/NewsList';
import Header from '../Header/Header';

function NewsApp() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const articleList = await (await fetch(`http://localhost:3001/api/news/search?query=${query}`)).json();
      setArticles(articleList);
      setLoading(false);
    };

    fetchArticles();
  }, [query]);

  const onSearch = (searchText) => {
    if (searchText) setQuery(searchText);
  };
  return (
    <>
      <Header onSearchNews={onSearch} />
      <NewsList articles={articles} loading={loading} />
    </>
  );
}

export default NewsApp;
