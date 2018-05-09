import React, { Component } from 'react';
import UserStatus from '../../Context/UserStatus';
import Header from '../Header/header';
import axios from 'axios';
import './home.css';

class Home extends Component {
  state = {
    OilArr: [],
    VinArr: [],
    HonArr: []
  };

  componentDidMount() {
    axios.get('http://localhost:3060/api/products').then(res => {
      this.setState({});
    });
  }
  render() {
    return (
      <div>
        <Header />
        <section className="app-store">
          <section>
            <strong>Featured</strong>
          </section>
          <section>
            <strong>Recent</strong>
          </section>
          <section>
            <strong>Producer</strong>
            <UserStatus.Consumer>
              {context => (
                <React.Fragment>
                  <div>{context.state.test}</div>
                  <button onClick={context.changeUserRoll}>Roll?</button>
                  <button onClick={context.additionalFunction}>Fix!</button>
                  <p>Authorized: {context.state.user_roll}</p>
                </React.Fragment>
              )}
            </UserStatus.Consumer>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
