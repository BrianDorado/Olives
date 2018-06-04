import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../../media/images/Logo.png'

const Header = () => {
    return (
      <div className="App-header">
       <img src={Logo} alt="App Logo" className='App-logo'/>
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
