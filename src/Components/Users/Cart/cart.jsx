import React, { Component } from 'react';
import Header from '../Header/header';  
import ProductCard from '../OliveCards/oliveCards';  
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

class Cart extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(mapStateToProps,)(Cart);