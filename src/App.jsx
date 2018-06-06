import React from 'react';

import UserProfile from './Components/Users/UserProfile/UserProfile'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './Components/Context/UserStatus';
import { getStoreItems } from './Ducks/Products/Products';
import Landing from './Components/Users/Landing/landing';
import Contact from './Components/Users/Contact/contact';
import { MuiThemeProvider } from 'material-ui/styles';
import Store from './Components/Users/Store/store';
import About from './Components/Users/About/about';
import Home from './Components/Users/Home/home';
import Cart from './Components/Users/Cart/cart';
import {connect} from 'react-redux'
import './reset.css';
import './App.css';

class App extends React.Component {

  componentDidMount(){
    getStoreItems()
    console.log('App Mounted');
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <UserProvider>
              <div className="App">
                <Switch>
                  <Route path = '/Home' component={Home} />
                  <Route path = '/Store' component={Store} />
                  <Route path = '/About' component={About}/> 
                  <Route path = '/Contact' component={Contact}/> 
                  <Route path = '/Cart' component={Cart}/> 
                  <Route path = '/My-Account' component={UserProfile}/> 
                  <Route exact path = '/' component={Landing}/> 
                </Switch>
                <Switch>
                  {/* <Route path = '/' component={}/>  */}
                </Switch>
              </div>
          </UserProvider>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state){
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(App);
