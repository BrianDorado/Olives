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
        return (
            <div>
                <Header/>
                <ProductCard/>
            </div>
        );
    }
}

export default Cart;