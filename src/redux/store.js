import { configureStore } from '@reduxjs/toolkit';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import profile from '../redux/profile'
import experience from '../redux/experience'
import education from '../redux/education'
import item from '../redux/item'

const rootReducer = combineReducers({
  profile,
  experience,
  education,
  item
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(thunk))
)

export default store
