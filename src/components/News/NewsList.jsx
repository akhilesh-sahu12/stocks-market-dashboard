// NewsList.js

import React from 'react';
import './NewsList.css'; // Import your CSS file

const NewsList = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.map((article) => (
        <div className="news-card" key={article.uuid}>
          <img className="card-image" src={article.image} alt={article.headline} />
          <div className="card-content">
            <h3 className="card-title">{article.headline}</h3>
            <p className="card-summary">{article.summary}</p>
            <a className="read-more-link" href={article.qmUrl} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
