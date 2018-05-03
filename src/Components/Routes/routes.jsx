import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Users/Landing/landing';
import Home from '../Users/Home/home';
import About from '../Users/About/about'
import Cart from '../Users/Cart/cart';
import Store from '../Users/Store/store';
import Contact from '../Users/Contact/contact';
import Header from '../Users/Header/header';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
        </Switch>
        <Switch>
          {/* <Route path = '/a' component={}> */}
          {/* Route */}
          {/* </Route> */}
        </Switch>
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Routes;
