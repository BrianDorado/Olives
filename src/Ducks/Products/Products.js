import axios from 'axios';

const initialState = {
  items: [],
  UserCart: []
};
const GET_ITEMS = 'GET_ITEMS';
const FILTER_ITEMS_BY_VALUE = 'FILTER_ITEMS_BY_VALUE';
const FILTER_ITEMS_BY_SIZE = 'FILTER_ITEMS_BY_SIZE';
const FILTER_ITEMS_BY_CATEGORY = 'FILTER_ITEMS_BY_CATEGORY';
const FILTER_ITEMS_BY_CUSTOM = 'FILTER_ITEMS_BY_CUSTOM';
const ADD_TO_CART = 'ADD_TO_CART';

export function getStoreItems() {
  const store_products = axios.get('http://localhost:4000/api/products').then(res => {
    return res.data;
  });
  return {
    type: GET_ITEMS,
    payload: store_products
  };
}

export function filterItemsByValue(e) {
  const filteredByValue = initialState.items.filter(item => {
    return item.price.indexOf(e.target.value) >= 0;
  });
  return {
    type: FILTER_ITEMS_BY_VALUE,
    payload: filteredByValue
  };
}

export function filterItemsBySize(e) {
  let value = e.target.value;

  return {
    type: FILTER_ITEMS_BY_SIZE,
    payload: value
  };
}

export function filterItemsByCategory(e) {
  let value = e.target.value.toLowerCase();

  return {
    type: FILTER_ITEMS_BY_CATEGORY,
    payload: value
  };
}

export function filterItemsByCustom(e) {
  let value = e.target.value.toLowerCase();

  return {
    type: FILTER_ITEMS_BY_CUSTOM,
    payload: value
  };
}

export function addToCart(item) {
  console.log('clicked');
  return {
    action: ADD_TO_CART,
    payload: item
  };
}

export default function products_Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS + '_FULFILLED':
      return Object.assign({}, state, {
        items: action.payload
      });
    case FILTER_ITEMS_BY_VALUE:
      return Object.assign({}, state, {
        items: action.payload
      });
    case FILTER_ITEMS_BY_SIZE:
      const filteredBySize = state.items.filter(item => {
        return item.size.indexOf(action.payload) >= 0;
      });
      return {
        ...state,
        items: filteredBySize
      };
    case FILTER_ITEMS_BY_CATEGORY:
    console.log(state.items.product_category);
      const filteredByCat = state.items.filter(item => {
        return item.product_category.toLowerCase().indexOf(action.payload) >= 0;
      });
      return {
        ...state,
        items: filteredByCat
      };
    case FILTER_ITEMS_BY_CUSTOM:
      // const filteredByCustom = state.items.filter(item => {
      //   return `${item.name} ${item.description}`.toLowerCase().indexOf(action.payload) >= 0;
      // });

      return {
        ...state,
        items: state.items.filter(item => {
          return `${item.name} ${item.description}`.toLowerCase().indexOf(action.payload) >= 0
        })
      };

    case ADD_TO_CART:
      return {
        UserCart: [...state.UserCart, action.payload]
      };
    default:
      return state;
  }
}
