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


export function filterItemsByValue(e) {
    const filteredByValue = initialState.items.filter(item => {
        item.price.indexOf(e.target.value) >= 0
    })
    return {
        type: FILTER_ITEMS_BY_VALUE,
        payload: filteredByValue
    }
}

export function filterItemsBySize(e) {

    let value = e.target.value

    return {
        type: FILTER_ITEMS_BY_SIZE,
        payload: value
    }
}

export function filterItemsByCustom(e) {
    // move this filter into the reducer. This way it has access to the correct version of state. Remember, redux is immutable, so the most up-to-date version of 'state' is passed from the store into the reducer

    // const filteredByCustom = state.items.filter(item => {
    //       `${item.name} ${item.description}`.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    // })

    // instead of passing the result of a function, pass the value you're filtering with
    let val = e.target.value.toLowerCase();

    return {
        type: FILTER_ITEMS_BY_CUSTOM,
        // payload: filteredByCustom
        payload: val
    }
}

export function addToCart(e) {
    let item = e.target
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
                items: action.payload
            })
        case FILTER_ITEMS_BY_SIZE:
            const filteredBySize = state.items.filter(item => {
                item.size.indexOf(action.payload) >= 0
            })
            return {
                ...state, 
                items: filteredBySize
            }
        case FILTER_ITEMS_BY_CUSTOM:
            // you can run logic here, and it'll have access to the right state
            console.log(state.items);
            const filteredByCustom = state.items.filter(item => {
               return  `${item.name} ${item.description}`.toLowerCase().indexOf(action.payload) >= 0
            })
            console.log(action.payload, state, filteredByCustom);

            // now, instead of returning action.payload (value of input field), return the new array
            return { ...state,
                items: filteredByCustom
            }

            // return {
            //     items: action.payload
            // }
        case ADD_TO_CART:
            return  {
                UserCart: [...state.UserCart, action.payload]
            }
        default:
            return state
    }
}