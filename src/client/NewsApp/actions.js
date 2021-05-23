/**
 * Created by Anil Jangra on 5/22/2021
 */
import { FETCHING_NEWS, SET_NEWS, RESET_DATA } from './constants';

export const fetchNews = (fetching, page, error) => ({
  type: FETCHING_NEWS, fetching, page, error,
});

export const fetchNewsSuccess = (articles, hasMore) => ({ type: SET_NEWS, articles, hasMore });

export const resetData = () => ({ type: RESET_DATA });
