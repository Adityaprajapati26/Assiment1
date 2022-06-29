import {legacy_createStore , compose} from 'redux'
import { todoReducer } from "./reducer";
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store=legacy_createStore(todoReducer,composeEnhancers())


  

