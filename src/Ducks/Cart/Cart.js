const initialState = {
    items: []
}

export function addToCart(item) {
    return {
        action: ADD_TO_CART,
        payload: item
    }
}

export default function reducer(state= initialState, action){
    return state 
}