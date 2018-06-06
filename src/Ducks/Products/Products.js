
import axios from 'axios'

const initialState = {
    items: [],
    UserCart:[]
}
const GET_ITEMS = 'GET_ITEMS'
const ADD_TO_CART = 'ADD_TO_CART'

export function getStoreItems() {
     return dispatch => {
         axios.get('http://localhost:3060/api/products').then(res => {
            dispatch({
                action: GET_ITEMS,
                payload: res.data
            })
    })
    console.log('Target function invoked')
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
            return Object.assign({}, state, {items: [...state.items, action.payload]}, console.log('Target function hit')) 
        case ADD_TO_CART:
            return Object.assign({}, state, { UserCart: [...state.UserCart, action.payload] })
         default: return state 
        }
}