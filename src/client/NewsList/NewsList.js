import React from 'react';
import PropTypes from 'prop-types';
import NewsTile from './NewsTile/NewsTile';

function NewsList({
  articles, error, loading, query,
}) {
  const noArticles = articles.length === 0;

  const renderLoadingOrError = () => {
    if (loading && noArticles) {
      return <h6 className="mt-5">Loading…</h6>;
    } if (error) {
      return <h6 className="mt-5 alert">Failed to load the News.</h6>;
    }
    return null;
  };

  const renderQueryString = () => {
    if (query) {
      return (
        <h6 className="mt-5">
          Showing search results for
          {' '}
          {`"${query}"`}
        </h6>
      );
    }
    return null;
  };

  const renderArticles = () => (!noArticles) && (
  <div className="row py-3 mt-3">
    {articles.map((news) => <NewsTile news={news} key={news.url} />)}
    {!noArticles && loading && (
    <div className="spinner-grow text-info m-5" role="status" />
    )}
  </div>
  );

  return (
    <div className="container-fluid min-vh-100">
      <div className="container mt-6">
        {renderQueryString()}
        {renderLoadingOrError()}
        {renderArticles()}
      </div>
    </div>
  );
}

export default NewsList;

NewsList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  query: PropTypes.string.isRequired,
};
