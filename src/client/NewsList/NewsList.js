import React from 'react';
import NewsTile from './NewsTile/NewsTile';

function NewsList({ articles, error, loading }) {
  const renderLoadingOrError = () => {
    if (loading) {
      return <h6>Loading…</h6>;
    } if (error) {
      <h6>Failed to search the News.</h6>;
    }
    return null;
  };

  return (
    <div className="container-fluid">
      <div className="container mt-6">
        {renderLoadingOrError()}
        { !(error || loading) && (
        <div className="row py-3 mt-3">
          {articles.map((nw, i) => <NewsTile news={nw} key={i} />)}
        </div>
        )}
      </div>
    </div>
  );
}

export default NewsList;
