import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import StoreStatus from '../../Context/StoreStatus';
import UserStatus from '../../Context/UserStatus';
import Header from '../Header/header';
import axios from 'axios';
import Store from '../Store/store';
import { Route, Switch } from 'react-router-dom';
import Details from '../Products/details';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="app-store">
          <section>
            <br />
            <br />
            <strong>Featured</strong>
            <UserStatus.Consumer>
              {context => (
                <React.Fragment>
                  <p>Hello {context.state.userName}!</p>
                </React.Fragment>
              )}
            </UserStatus.Consumer>
          </section>
          <br />
          <br />
          <section>
            <strong>Recent</strong>
            <StoreStatus.Consumer>{context => <React.Fragment/>}</StoreStatus.Consumer>
          </section>
          <br />
          <br />
          <section>
            <strong>Producer</strong>
          </section>
        </section>
        <Switch>
          <Route path="/c/store" component={Store} />
        </Switch>
      </div>
    );
  }
}

export default Home;
