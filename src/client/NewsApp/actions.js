/**
 * Created by Anil Jangra on 5/22/2021
 */
import { FETCHING_NEWS, SET_NEWS } from './constants';

export const fetchNews = (fetching) => ({ type: FETCHING_NEWS, fetching });

export const fetchNewsSuccess = (articles) => ({ type: SET_NEWS, articles });
