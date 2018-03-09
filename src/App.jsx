import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes/routes'
import './reset.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes/> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
