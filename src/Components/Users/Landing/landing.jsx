import React, { Component } from 'react';
import LandingImage from './../../../media/images/GreenOlives.jpg';
import { Link } from 'react-router-dom';
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <img src={LandingImage} alt="LandingImage" className="Landing_image" />
        <strong className="welcome-text">Welcome</strong>
        <Link to = '/home'>
          <h1 className='timeout'>Enter</h1>
        </Link>
      </div>
    );
  }
}

export default Landing;
