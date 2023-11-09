
import React from 'react';

const Article = ({ image, title, description, profile, views }) => {
  return (
    <div className="article card mb-3">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between">
          <p className="card-text"><small className="text-muted">{profile}</small></p>
          <p className="card-text"><small className="text-muted">{views} Views</small></p>
        </div>
        <button className="btn btn-secondary">Share</button>
      </div>
    </div>
  );
};

export default Article;
