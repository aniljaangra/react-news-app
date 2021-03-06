import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearchNews }) {
  let input;
  const onKeyDown = (e) => {
    if (e.key === 'Enter') onSearchNews(input.value);
  };
  return (
    <div>
      <div className="input-group my-3 mr-sm-2">
        <input
          type="text"
          className="form-control"
          placeholder="search news"
          ref={(ref) => { input = ref; }}
          onKeyDown={onKeyDown}
        />
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={() => onSearchNews(input.value)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  onSearchNews: PropTypes.func.isRequired,
};
