import React, { Component } from 'react';
import Header from '../Header/header';  

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h3><strong>Olive Oil</strong> </h3>
                <h3><strong>Vinager</strong></h3>
                <h3><strong>Honey</strong>
                <section><p>This is some information about Honey</p></section>
                <section></section>
                <section></section>
                </h3>
            </div>
        );
    }
}

export default About;