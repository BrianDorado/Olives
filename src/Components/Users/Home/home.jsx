import React, { Component } from 'react';
import Header from '../Header/header';
import {Route} from 'react-router-dom';
import axios from 'axios'
import './home.css'

class Home extends Component {
  state={
    OilArr:[],
    VinArr:[],
    HonArr:[]
  }

  componentDidMount() {
    axios.get('http://localhost:3060/api/products').then(res => {
      this.setState({

      })
    })
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

      </div>
    );
  }
}

export default Home;
