import axios from 'axios'

const initialState = {
    items: [],
    UserCart: []
}
const GET_ITEMS = 'GET_ITEMS'
const USER_CUSTOM_FILTER = 'USER_CUSTOM_FILTER'
const ADD_TO_CART = 'ADD_TO_CART'

export function getStoreItems() {
    const store_products = axios.get('http://localhost:3060/api/products').then(res => {
        return res.data
    })
    return {
        type: GET_ITEMS,
        payload: store_products
    }
}

export function filterItemsByUserInput(event) {
        const filteredBySearch = this.state.UserCart.filter()
        return {
            type: USER_CUSTOM_FILTER,
            payload: filteredBySearch
        }
}

export function addToCart(item) {
    return {
        action: ADD_TO_CART,
        payload: item
    }
}

export default function products_Reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS + '_FULFILLED':
            return Object.assign({}, state, {
                items: action.payload
            })
        case USER_CUSTOM_FILTER:
            return Object.assign({}, state, {
                UserCart: [action.payload]
            })
        case ADD_TO_CART:
            return Object.assign({}, state, {
                UserCart: [...state.UserCart, action.payload]
            })
        default:
            return state
    }
}