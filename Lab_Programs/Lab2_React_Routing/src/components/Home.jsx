import React from 'react';
import './Page.css';

// This is a Functional Component
function Home() {
  return (
    <div className="page-container page-enter">
      <div className="glass-card">
        <div className="icon-wrapper bg-blue">
          🏠
        </div>
        <h1 className="page-title">Welcome to the Home Page</h1>
        <p className="page-text">
          This component was created using a standard <strong>Functional Component</strong>.<br/>
          Functional components are the modern standard in React development!
        </p>
        <button className="primary-btn mt-4">Explore More</button>
      </div>
    </div>
  );
}

export default Home;
