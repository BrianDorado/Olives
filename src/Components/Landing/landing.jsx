import React, { Component } from 'react';
import Header from '../Header/header';
import './landing.css'
import OliveCards from '../OliveCards/oliveCards'

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

//hidden menu until they navigtate into another page, including the home
// home page is different than landing