import React from 'react';
// import ProductCard from '../OliveCards/oliveCards';  
import Header from '../Header/header';  
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        UserCart: state.UserCart
    };
}

class Cart extends React.Component {
    render() {
        const CartContent = this.props.UserCart
        return (
            <div>
                <Header CartItems={CartContent}/>
                <section>Current Cart Items and actions</section>
                <section></section>
                <section></section>
            </div>
        );
    }
}

export default connect(mapStateToProps,)(Cart);