import {legacy_createStore as createStore,combineReducers} from 'redux'
import { todoReducer } from "./reducer";


const  rootreducer=combineReducers({todos:todoReducer})
export const Store=createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);