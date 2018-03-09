import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Store from '../Store/store';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Switch>
          <Route path="c/store" component={Store} />
        </Switch>
        <Link to="/home">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </div>
    );
  }
}

export default Header;
