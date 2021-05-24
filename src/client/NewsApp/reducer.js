/**
 * Created by Anil Jangra on 5/22/2021
 */
import { FETCHING_NEWS, RESET_DATA, SET_NEWS } from './constants';

const initialState = {
  articles: [], fetching: false, error: '', hasMore: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_NEWS:
      return {
        ...state,
        fetching: action.fetching,
        page: action.page || state.page,
        articles: action.page === 1 ? [] : state.articles,
        error: action.error || '',
      };

    case SET_NEWS:
      return {
        ...state,
        fetching: false,
        error: '',
        articles: [...state.articles, ...action.articles],
        hasMore: action.hasMore,
      };
    case RESET_DATA:
      return {
        ...state,
        hasMore: true,
        articles: [],
      };
    default:
      return state;
  }
}

export default reducer;
