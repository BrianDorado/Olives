import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="nav-bar" >
                <Link to ='/home'>Home</Link>
                <Link to ='/store'>Store</Link>
                <Link to ='about'>About</Link>
                <Link to='contact'>Contact</Link>
                <Link to ='cart'>Cart</Link>
            </div>
        );
    }
}

export default Header;