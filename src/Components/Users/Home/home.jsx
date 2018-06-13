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
          </section>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    items: state.items.filter(item => item.featured)
  };
}

export default connect(mapStateToProps)(Home);
