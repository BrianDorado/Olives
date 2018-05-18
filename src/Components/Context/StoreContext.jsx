import React from 'react'

const StoreStatus = React.createContext();

class StoreProvider extends React.Component{
    state ={ 
        cart: [],
        
    }

    render(){
        return(
            <StoreStatus.Provider value={{state = this.state}}>
                {this.props.children}
            </StoreStatus.Provider>
        )
    }
}

export {StoreProvider, StoreStatus as default}
