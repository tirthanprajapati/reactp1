import React from 'react';
import Header from './header.js';
import OptionBar from './optionbar.js';
import ArticleSection from './articlesection.js';

const MainPage = () => {
  return (
    <div>
      <Header />
      <OptionBar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-9">
            <ArticleSection />
          </div>
          <div className="col-lg-3">
            {/* Add content for the 25% width segment */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
