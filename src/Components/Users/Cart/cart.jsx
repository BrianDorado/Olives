import React from 'react';
import ProductCard from '../OliveCards/oliveCards';  
import Header from '../Header/header';  
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

class Cart extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <section>Current Cart Items and actions</section>
                <section></section>
                <section></section>
            </div>
        );
    }
}

export default connect(mapStateToProps,)(Cart);