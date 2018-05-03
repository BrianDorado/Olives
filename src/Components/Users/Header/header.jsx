import React from 'react';
import { Route, Link } from 'react-router-dom';
import Store from '../Store/store'
import './header.css';

const Header = () => {
    return (
      <div className="App-header">
       <img src="" alt="App Logo"/>
          <Link to="/home">Home</Link>
          <Link to="/c/store">Store</Link>
          <Link to="/c/about">About</Link>
          <Link to="/c/contact">Contact</Link>
          <Link to="/c/cart">Cart</Link>
          <Link to="/c/account">My Account</Link>
      </div>
    );
}

export default Header;
