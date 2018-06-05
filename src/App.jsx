import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './Components/Context/UserStatus';
import Contact from './Components/Users/Contact/contact';
import { MuiThemeProvider } from 'material-ui/styles';
import Store from './Components/Users/Store/store';
import About from './Components/Users/About/about';
import Home from './Components/Users/Home/home';
import Cart from './Components/Users/Cart/cart';
import { Provider } from 'react-redux';
import './reset.css';
import './App.css';
import UserProfile from './Components/Users/UserProfile/UserProfile'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <UserProvider>
            <Provider>
              <div className="App">
                <Switch>
                  <Route path = '/home' component={Home} />
                  <Route path = '/store' component={Store} />
                  <Route path = '/About' component={About}/> 
                  <Route path = '/Contact' component={Contact}/> 
                  <Route path = '/Cart' component={Cart}/> 
                  <Route path = '/My-Account' component={UserProfile}/> 
                </Switch>
              </div>
            </Provider>
          </UserProvider>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
