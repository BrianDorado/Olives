import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './Components/Routes/routes';
import Home from './Components/Users/Home/home'
import './reset.css';
import './App.css';


class App extends Component {
  state={
    auth: null,
    user_id: null,
    user_roll: 0
  }

  
  render() {
    return (
      <MuiThemeProvider>
            <BrowserRouter>
              <div className="App">
              <Routes/>                 
                <Route path = '/home' component={Home}/> 
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
    );
  }
}

export default App;
