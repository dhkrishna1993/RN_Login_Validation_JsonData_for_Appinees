import React,{Component} from "react"
import { createStore, applyMiddleware } from 'redux';
import reducers from "./reduser"
import thunk from 'redux-thunk';



const Store = createStore(reducers,applyMiddleware(thunk));

export default Store
