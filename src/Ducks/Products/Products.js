const initialState = {
    items: [],
    UserCart:[]
}

export function addToCart(item) {
    return {
        action: ADD_TO_CART,
        payload: item
    }
}

export default function reducer(state= initialState, action){
    switch (action.type){
        case ADD_TO_CART:
            return Object.assign({}, state, item, [action.payload, ... item])
    }
    return state 
}