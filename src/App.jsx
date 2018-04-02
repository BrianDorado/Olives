import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes/routes';
import './App.css';

import './reset.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className="App">
            <Routes />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
