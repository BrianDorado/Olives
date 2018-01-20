import React, { Component } from 'react';
import Header from '../Header/header';
import './landing.css'

class Landing extends Component {
    render() {
        return (
            <div>
            <Header/>
            <div className='landing-container' >
                <div className='welcome-container' >
                    <strong>Welcome</strong>
                </div>
            </div>
            </div>
        );
    }
}

export default Landing;