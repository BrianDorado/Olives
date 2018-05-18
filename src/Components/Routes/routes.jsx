import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Users/Landing/landing';
import About from '../Users/About/about'
import Cart from '../Users/Cart/cart';
import Contact from '../Users/Contact/contact';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
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
