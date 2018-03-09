import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Landing/landing'
import Home from '../Home/home';
import About from '../About/about';
import Cart from '../Cart/cart';
import Store from '../Store/store';
import Contact from '../Contact/contact';
import Header from '../Header/header';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route path="/c" component={Header}>
              <Route path="/home" component={Home} />
              <Route path="/store" component={Store} />
              <Route path="/cart" component={Cart} />
              <Route path="/about" component={About} />
            </Route>
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
  }
}

export default Routes
