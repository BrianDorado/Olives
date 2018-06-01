import React from 'react'
import axios from 'axios'

const StoreStatus = React.createContext();

class StoreProvider extends React.Component{
    state ={ 
        prodcuts: [],
        cart: []
        
    }
    
    addProductToCart = item => {
        let {cart} = this.state
        this.setState({
            cart: [item, ...cart]
        })
        console.log('added to cart!');
    }
    filterProducts = e => {

    }
    

    componentDidMount() {
        axios.get('http://localhost:3060/api/products').then(res => {
            this.setState({
                prodcuts: res.data 
            });
        });
    }

    render(){
        return(
            <StoreStatus.Provider value={{state: this.state}}>
                {this.props.children}
            </StoreStatus.Provider>
        )
    }
}

export {StoreProvider, StoreStatus as default}
