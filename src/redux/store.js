import { configureStore } from '@reduxjs/toolkit';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import profile from '../redux/profile'
import experiences from './experiences'
import educations from './educations'
import item from './items'
import options from './options'

// Constant
const DELETE_RESUME = 'DELETE_RESUME'
const UPDATE_RESUME = 'UPDATE_RESUME'

// Combine all reducers
const appReducer = combineReducers({
  profile,
  experiences,
  educations,
  item,
  options
})

const rootReducer = (state, action) => {
  switch (action.type) {
    case DELETE_RESUME:
      state = undefined
      break;
    case UPDATE_RESUME: 
      state = {...state, ...action.payload}
      break;
    default:
      break;
  }
  return appReducer(state, action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(thunk))
)

// Action helper
const action = (type, payload) => {
  return {type, payload}
}

export const deleteResume = () => action(DELETE_RESUME, {})
export const updateResume = resume => action(UPDATE_RESUME, resume)


export default store
