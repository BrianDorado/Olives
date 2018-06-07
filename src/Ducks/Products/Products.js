import axios from 'axios'

const initialState = {
    items: [],
    UserCart: []
}
const GET_ITEMS = 'GET_ITEMS'
const FILTER_ITEMS_BY_VALUE = 'FILTER_ITEMS_BY_VALUE'
const FILTER_ITEMS_BY_SIZE = 'FILTER_ITEMS_BY_SIZE'
const FILTER_ITEMS_BY_CUSTOM = 'FILTER_ITEMS_BY_CUSTOM'
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

export function filterItemsByValue(value) {
    const filteredByValue = this.state.items.filter(item => {
        item.price.includes(value)
    })
    return {
        type: FILTER_ITEMS_BY_VALUE,
        payload: filteredByValue
    }
}

export function filterItemsBySize(value) {
    const filteredBySize = this.state.items.filter(item => {
        item.size.includes(value)
    })
    return {
        type: FILTER_ITEMS_BY_SIZE,
        payload: filteredBySize 
    }
}

export function filterItemsByCustom(value) {
    const filteredByCustom = this.state.items.filter(item => {
        `${item.name} ${item.description}`.includes(value.toLowerCase())
    })
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
        case FILTER_ITEMS_BY_VALUE:
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