/**
 * Created by Anil Jangra on 5/22/2021
 */
import { useEffect } from 'react';
import { NEWS_API_URL } from '../constants';
import { fetchNews, fetchNewsSuccess } from '../../NewsApp/actions';

// make API calls and pass the returned data via dispatch
const useFetch = (data, dispatch) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchNews(true));
        const articles = await (await fetch(`${NEWS_API_URL}?query=${data.query}&page=${data.page}`)).json();
        dispatch(fetchNewsSuccess(articles));
      } catch (err) {
        // handle error
        dispatch(fetchNews(false));
      }
    };
    fetchData();
  }, [dispatch, data.page, data.query]);
};

export default useFetch;
