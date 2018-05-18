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
            <UserStatus.Consumer>
              {context => (
                <React.Fragment>
                    <p>
                      Hello {context.state.userName}!
                    </p>
                </React.Fragment>
              )}
            </UserStatus.Consumer>
          </section>
          <section>
            <strong>Recent</strong>
          </section>
          <section>
            <strong>Producer</strong>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
