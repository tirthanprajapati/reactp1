// ArticleSection.js

import React from 'react';
import Article from './article.js';
import LocationDropdown from './location.js';

const ArticleSection = () => {
  const articles = [
    { id: 1, image: 'https://via.placeholder.com/300x200', title: 'Article 1', description: 'Description of Article 1', profile: 'Author 1', views: 100 },
    { id: 2, image: 'https://via.placeholder.com/300x200', title: 'Article 2', description: 'Description of Article 2', profile: 'Author 2', views: 150 },
  ];

  return (
    <div className="row">
      <div className="col-lg-9">
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
      <div className="col-lg-3">
        <LocationDropdown />
      </div>
    </div>
  );
};

export default ArticleSection;
