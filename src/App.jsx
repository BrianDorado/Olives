import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Home from  './Components/Home/home';
import About from './Components/About/about';
import Cart from './Components/Cart/cart';  
import Store from './Components/Store/store'; 
import Contact from './Components/Contact/contact';   
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Route exact path = '/' component={Landing}/> 
            <Route path = '/home' component={Home}/> 
            <Route path = '/about' component={About}/> 
            <Route path = '/cart' component={Cart}/> 
            <Route path = '/store' component={Store}/> 
            <Route path = '/contact' component={Contact}/> 
        </div>
      </BrowserRouter>
      // something
    );
  }
}

export default App;
