import React from 'react'

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


    render(){
        return(
            <StoreStatus.Provider value={{state: this.state}}>
                {this.props.children}
            </StoreStatus.Provider>
        )
    }
}

export {StoreProvider, StoreStatus as default}
