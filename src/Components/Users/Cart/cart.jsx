import React, { Component } from 'react';
import Header from '../Header/header';  
import ProductCard from '../OliveCards/oliveCards';  

class Cart extends Component {
    constructor(){
        super()
            this.state = {
                productArr: null
            }
    }

    componentDidMount(){
         
    }

    render() {
        const CartItems = this.state.productArr
        return (
            <div>
                <Header/>
                <ProductCard/>
                <div className="cartItems">{CartItems}</div>
            </div>
        );
    }
}

export default Cart;