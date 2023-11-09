import React from 'react';

const OptionBar = () => {
  return (
    <div className="option-bar bg-light p-2 d-flex flex-column flex-sm-row justify-content-between">
      <div className="left-options mb-2 mb-sm-0">
        <button className="btn btn-outline-primary me-2 mb-2 mb-sm-0">All Posts</button>
        <button className="btn btn-outline-primary me-2 mb-2 mb-sm-0">Articles</button>
        <button className="btn btn-outline-primary me-2 mb-2 mb-sm-0">Event</button>
        <button className="btn btn-outline-primary me-2 mb-2 mb-sm-0">Education</button>
        <button className="btn btn-outline-primary mb-2 mb-sm-0">Job</button>
      </div>
      <div className="right-options">
        <button className="btn btn-primary me-2 mb-2 mb-sm-0">Create New Post</button>
        <button className="btn btn-success mb-2 mb-sm-0">Join Group</button>
      </div>
    </div>
  );
};

export default OptionBar;
