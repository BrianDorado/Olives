import React, { Component } from 'react';
import LandingImage from './../../../media/images/GreenOlives.jpg';
import './landing.css';

class Landing extends Component {
  render() {
    return (
        <div className="landing-container">
          <img src={LandingImage} alt="LandingImage" className="Landing_image" />
            <strong className='welcome-text' >Welcome</strong>
        </div>
    );
  }
}

export default Landing;
