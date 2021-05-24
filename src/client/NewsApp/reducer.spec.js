/**
 * Created by Anil Jangra on 5/24/2021
 */
import reducer from './reducer';
import { resetData, fetchNews, fetchNewsSuccess } from './actions';

const initialState = {
  articles: [], fetching: false, error: '', hasMore: true,
};
describe('news reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set fetching to true', () => {
    expect(reducer(initialState, fetchNews(true)).fetching).toEqual(true);
  });

  it('should set page to given value', () => {
    expect(reducer(initialState, fetchNews(true, 1)).page).toEqual(1);
  });

  it('should set error', () => {
    expect(reducer(initialState, fetchNews(true, 1, 'fetch error')).error).toEqual('fetch error');
  });

  it('should set articles empty if page 1 is requested', () => {
    expect(reducer(initialState, fetchNews(true, 1)).articles).toEqual([]);
  });

  it('should set fetching to false', () => {
    expect(reducer(initialState, fetchNews(false)).fetching).toEqual(false);
  });

  it('should set articles to given list', () => {
    expect(reducer(initialState, fetchNewsSuccess([{ id: 'sample', source: 'sample news' }])).articles.length).toEqual(1);
  });

  it('should set append additional articles to given list', () => {
    const setArticles = reducer(initialState, fetchNewsSuccess([{ id: 'sample', source: 'sample news' }]));

    expect(reducer(setArticles, fetchNewsSuccess([{ id: 'sample2', source: 'sample news 2' }])).articles.length).toEqual(2);
  });

  it('should reset articles and page', () => {
    expect(reducer(initialState, resetData())).toEqual(initialState);
  });

  it('should set hasMore if there is more news', () => {
    expect(reducer(initialState, fetchNewsSuccess([], true)).hasMore).toEqual(true);
  });

  it('should unset hasMore if there is no more news', () => {
    expect(reducer(initialState, fetchNewsSuccess([], false)).hasMore).toEqual(false);
  });
});
