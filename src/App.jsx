import React, { Component } from 'react';
import Authentication from './Components/Hawks/UserAuth';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes/routes';
import State from './Components/Hawks/State';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      // <State>
      //   <Authentication>
          <MuiThemeProvider>
            <BrowserRouter>
              <div className="App">
                <Routes />
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
      //   </Authentication>
      // </State>
    );
  }
}

export default App;
