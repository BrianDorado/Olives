
import axios from 'axios'

const initialState = {
    items: [],
    UserCart:[]
}
const ADD_TO_CART = 'ADD_TO_CART'
const GET_ITEMS = 'GET_ITEMS'

export function getStoreItems() {
    axios.get('http://localhost:3060/api/products').then(res => {

        return {
            action: GET_ITEMS,
            payload: res.data
        }
    })
    console.log('Items retrieved');
}
export function addToCart(item) {
    return {
        action: ADD_TO_CART,
        payload: item
    }
}

export default function reducer(state= initialState, action){
    switch (action.type){
        case GET_ITEMS:
            return Object.assign({}, state, {items: [...state.items, action.payload]})
        case ADD_TO_CART:
            return Object.assign({}, state, { UserCart: [...state.UserCart, action.payload] })
         default: return state 
        }
}