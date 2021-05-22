/**
 * Created by Anil Jangra on 5/22/2021
 */
import { FETCHING_NEWS, SET_NEWS } from './constants';

function reducer(state, action) {
  switch (action.type) {
    case FETCHING_NEWS:
      return { ...state, fetching: action.fetching };
    case SET_NEWS:
      return { ...state, fetching: false, articles: [...state.articles, ...action.articles] };
    default:
      return state;
  }
}

export default reducer;
