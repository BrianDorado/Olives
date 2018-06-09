import React, { Component } from 'react';
import Header from '../Header/header';
import './about.css'

class About extends Component {
  render() {
    return (
      <div className='about-container' >
        <Header />
        <br/>
        <br/>
        <br/>
        <h1><strong>!!!!INCOMPLETE STYLING!!!!</strong></h1>
        <br/>
        <br/>
        <br/>
        <h3 className='about-oil-header' >
          <strong>Olive Oil</strong>
        </h3>
       
          <section className='about-oil-body' >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aieNV3V4b_s"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title='How-Olive-Oil-is-made'
            />
            <article>This is an article about how honey is made</article>
          </section>
                <h3 className='about-vinegar-header' >
                    <strong>Vinager</strong>
                </h3>
          <section className='about-vinegar-body' >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ycdkhO-QEUU"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title='how-vinegar-is-made'
            />
            <article>This is an article about how vinegar is made</article>
          </section>
            <h3 className='about-honey-header' >
                <strong>Honey</strong>
            </h3>
            <section className='about-honey-body' >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/F_0SyWHsYSk"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title='how-honey-is-made'
            />
            <article>This is an article about how honey is made</article>
          </section>
        
      </div>
    );
  }
}

export default About;
