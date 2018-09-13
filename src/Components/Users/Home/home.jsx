import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/header';
// import ProductCards from '../OliveCards/oliveCards';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className="app-store">
          <section className="app-store-featured">
            <br />
            <br />
            <strong>Featured</strong>
            <div className="featured-products">
              {this.props.items.map(item => {
                return <div>{item.id}</div>;
              })}
            </div>
          </section>

          <section>
            <strong>Recent</strong>
            {/* Also recent uploads by favorite shops */}
          </section>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    // sql table needs to be updated 
    items: state.items.filter(item => item.featured).slice(0,20)
  };
}

export default connect(mapStateToProps)(Home);
