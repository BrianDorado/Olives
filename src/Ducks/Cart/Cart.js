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
    switch (action.type){
        case ADD_TO_CART:
            return Object.assign({}, state, guest, [action.payload, ... guest])
    }
    return state 
}