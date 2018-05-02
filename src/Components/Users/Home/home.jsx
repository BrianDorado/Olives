import React, { Component } from 'react';
import Header from '../Header/header';
import {Route} from 'react-router-dom';
import './home.css'

class Home extends Component {
  state={
    OilArr:[],
    VinArr:[],
    HonArr:[]
  }

  componentDidMount = {

  }
  render() {
    return (
      <div>
        <Header />
        <section className='app-store'>
          <section>
            <strong>Featured</strong>
          </section>
          <section>
            <strong>Recent</strong>
          </section>
          <section>
            <strong>Producer</strong>
            Some Text
          </section>
        </section>

        {/* <Route to = '/' Component ={}/> */}
      </div>
    );
  }
}

export default Home;
