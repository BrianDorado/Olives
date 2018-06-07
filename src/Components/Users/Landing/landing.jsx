import React, { Component } from 'react';
import LandingImage from './../../../media/images/GreenOlives.jpg';
import { Route, Link } from 'react-router-dom';
import Home from '../Home/home'
import './landing.css';

class Landing extends Component {

  // autoRelocate = () => {
  //   window.location.assign('/home')
  // }
  // componentDidMount(){
  //   setTimeout(
  //     this.autoRelocate, 10000)
  // }
  
  render() {
    return (
      <div className="landing-container">
        <img src={LandingImage} alt="LandingImage" className="Landing_image" />
        <strong className="welcome-text">Welcome</strong>
        <section className="user-actions-landing">
        <h2>New / Existing Users</h2>
        <Link to = '/home'>
          <h2 >Continue as Guest</h2>
        </Link>
        </section>
        <Route path = '/home' component={Home}/> 
      </div>
    );
  }
}

export default Landing;
