import React, { Component } from 'react';
import { UserProvider } from './Components/Context/UserStatus';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import Routes from './Components/Routes/routes';
import Home from './Components/Users/Home/home';
import Store from './Components/Users/Store/store'
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <UserProvider>
            <div className="App">
              <Routes/>
              <Route path="/home" component={Home} />
              <Route path="/c/store" component={Store} />
            </div>
          </UserProvider>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
