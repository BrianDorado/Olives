import React from 'react';
// import ProductCard from '../OliveCards/oliveCards';  
import Header from '../Header/header';  
import { connect } from 'react-redux';



class Cart extends React.Component {
    render() {
        const CartContent = this.props.UserCart.map(item => {
            <div>
               Cart Content {item.description}
            </div>
        })
        return (
            <div>
                <Header CartItems={CartContent}/>
                <section>Current Cart Items and actions
                    <div> {CartContent} </div>
                </section>
                <section></section>
                <section></section>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    UserCart: state.UserCart
  };
}

export default connect(mapStateToProps,)(Cart);