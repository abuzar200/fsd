import React, { Component } from 'react';
import './Page.css';

// This is a Class Component
class About extends Component {
  render() {
    return (
      <div className="page-container page-enter">
        <div className="glass-card">
          <div className="icon-wrapper bg-purple">
            ℹ️
          </div>
          <h1 className="page-title">About Us</h1>
          <p className="page-text">
            This component was created using <strong>ES6 Class syntax</strong>.<br/>
            Class components were the standard before React 16.8. It is extremely important to know how to recognize and write them!
          </p>
          <div className="stats-container mt-4">
            <div className="stat-box">
              <h3>React</h3>
              <span>v18.x</span>
            </div>
            <div className="stat-box">
              <h3>Vite</h3>
              <span>v5.x</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
