import React from 'react';

function SearchBar({ onSearchNews }) {
  let input;
  return (
    <div>
      <div className="input-group my-3 mr-sm-2">
        <input
          type="text"
          className="form-control"
          placeholder="search news"
          ref={(ref) => { input = ref; }}
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
