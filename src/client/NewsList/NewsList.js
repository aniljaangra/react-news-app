import React from 'react';
import NewsTile from './NewsTile/NewsTile';

function NewsList({
  articles, error, loading, query,
}) {
  const noArticles = articles.length === 0;

  const renderLoadingOrError = () => {
    if (loading && noArticles) {
      return <h6 className="mt-5">Loading…</h6>;
    } if (error) {
      return <h6 className="mt-5">Failed to load the News.</h6>;
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

  return (
    <div className="container-fluid min-vh-100">
      <div className="container mt-6">
        {renderQueryString()}
        {renderLoadingOrError()}
        { (!noArticles) && (
        <div className="row py-3 mt-3">
          {articles.map((nw, i) => <NewsTile news={nw} key={nw.url} />)}
          {!noArticles && loading && (
          <div className="spinner-grow text-info m-5" role="status" />
          )}
        </div>
        )}
      </div>
    </div>
  );
}

export default NewsList;
