import {createStore, applyMiddleware} from 'redux'
import products_Reducer from '../Ducks/Products/Products'
import promiseMiddleware from 'redux-promise-middleware'
 
export default createStore(products_Reducer, applyMiddleware(promiseMiddleware()))