import React, { Component } from 'react';
import { UserProvider } from './Components/Context/UserStatus';
import { StoreProvider } from './Components/Context/StoreStatus';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import Store from './Components/Users/Store/store';
import Routes from './Components/Routes/routes';
import Home from './Components/Users/Home/home';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <UserProvider>
            <StoreProvider>
              <div className="App">
                <Routes />
                <Route path="/home" component={Home} />
                <Route path="/c/store" component={Store} />
              </div>
            </StoreProvider>
          </UserProvider>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
