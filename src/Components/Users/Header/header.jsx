import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../../media/images/Logo.png'

const Header = props => {
    return (
      <div className="App-header">
       <img src={Logo} alt="App Logo" className='App-logo'/>
          <Link to="/Home">Home</Link>
          <Link to="/Store">Store</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Cart">Cart 
          {/* {props.CartItems && props.CartItems.length === 0 ? null : <div>({props.CdartItems.length})</div>  }  */}
          </Link>
          <Link to="/My-Account">My Account</Link>
      </div>
    );
}

export default Header;
