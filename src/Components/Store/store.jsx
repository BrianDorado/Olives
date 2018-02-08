import React, { Component } from 'react';
import Header from '../Header/header'; 
import ProductCards from '../OliveCards/oliveCards';   

class Store extends Component {
    constructor(){
        super()
            this.state={
                productArr: null
            }
    }

    componentDidMount(){

    }

    
    render() {
        return (
            <div>
                <Header/>
                <ProductCards/>
            </div>
        );
    }
}

export default Store;