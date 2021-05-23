import React from 'react';
import Image from './Image';

function NewsTile({ news }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
      <div
        className="card shadow mb-5 p-2 bg-white rounded"
      >
        <Image src={news.urlToImage} />
        <div className="card-body">
          <h5 className="card-title">
            {news.title}
          </h5>
          <p className="card-text">
            {news.description}
          </p>
        </div>
        <a
          href={news.url}
          className="btn btn-primary"
          target="_blank"
          style={{ width: '50%', margin: '5% auto 10% auto' }}
          rel="noreferrer"
        >
          {news.source.name}
        </a>
      </div>
    </div>
  );
}
export default NewsTile;
