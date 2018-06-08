import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/header';
// import ProductCards from '../OliveCards/oliveCards';
import './home.css'; 

class Home extends React.Component {
  render() {
    // let featuredProducts = this.props.items.map(item => {
    //   return (
    //     <ProductCards
    //       key={item.id}
    //       img={item.image}
    //       title={item.name}
    //       description={item.description}
    //       price={item.price}
    //       size={item.size}
    //     />
    //   );
    // });

    // let recentProducts = this.props.items.map(item => {
    //   return (
    //     <ProductCards
    //       key={item.id}
    //       img={item.image}
    //       name={item.detailed_name}
    //       price={item.price}
    //       description={item.description}
    //       size={item.size}
    //     />
    //   );
    // });

    return (
      <div>
        <Header />
        <section className="app-store">
          <section className="app-store-featured">
            <br />
            <br />
            <strong>Featured</strong>
            <div className="featured-products">
              {/* {featuredProducts} */}
            </div>
          </section>

          <section>
            <strong>Recent</strong>
            {/* <div className="recent-products"> {recentProducts} </div>Yev */}
          </section>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(Home);
