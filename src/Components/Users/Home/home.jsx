import React, { Component } from 'react';
import Header from '../Header/header'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <section>Featured</section>
                <section>recent</section>
                <section>Producers</section>
                <section></section>
            </div>
        );
    }
}

export default Home;