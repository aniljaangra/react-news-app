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
        if (!data.hasMore) return;
        dispatch(fetchNews(true, data.page));
        const { articles, error, hasMore } = await (await fetch(`${NEWS_API_URL}?query=${data.query}&page=${data.page}`)).json();
        if (error) {
          dispatch(fetchNews(false, null, error));
        } else {
          dispatch(fetchNewsSuccess(articles, hasMore));
        }
      } catch (err) {
        // handle error
        console.log(err);
        dispatch(fetchNews(false, null, err));
      }
    };
    fetchData();
  }, [dispatch, data.page, data.query, data.hasMore]);
};

export default useFetch;
