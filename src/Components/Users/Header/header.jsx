import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
      <div className="App-header">
       <img src="" alt="App Logo"/>
          <Link to="/home">Home</Link>
          <Link to="/store">Store</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/account">My Account</Link>
      </div>
    );
}

export default Header;
