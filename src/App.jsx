import React, { Component } from 'react';
import { UserProvider } from './Components/Context/UserStatus';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
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
            <Provider>
              <div className="App">
                {/* <Routes /> */}
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/c/store" component={Store} />
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
