import uuid from 'uuid'
import { moveObject } from '../utils/index.js';

// Constant
const CREATE_ITEM = 'CREATE_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const MODIFY_ITEM = 'MODIFY_ITEM'
const MOVE_ITEM = 'MOVE_ITEM'

// Reducers
const initialData = {
  projects: [],
  languages:[],
  hobbies:[]
}

export default function itemReducer(state = initialData, action) {
  switch (action.type) {
    case CREATE_ITEM:
      return {
        ...state, 
        [action.payload.type]: [...state[action.payload.type], action.payload.item]
      }
    case DELETE_ITEM:
      return {
        ...state,
        [action.payload.type]: state[action.payload.type].filter(item => item.key !== action.payload.key)
      }
    case MODIFY_ITEM:
      const index = state[action.payload.type].findIndex(el => el.key == action.payload.key)
      state[action.payload.type][index] = action.payload.item
      return state
    case MOVE_ITEM:
      state[action.payload.type] = moveObject(state[action.payload.type], action.payload.key, action.payload.offset)
      return state
    default:
      return state
  }
}

// Action helper
const action = (type, payload) => {
  return { type, payload }
}

// Actions Creator
export const moveItem = (item, type, offset) => action(MOVE_ITEM, {type, key: item.key, offset})
export const createItem = (item, type) => action(CREATE_ITEM, {type, item:{ ...item, key: uuid() }})
export const deleteItem = (item, type) => action(DELETE_ITEM, {type, key: item.key})
export const modifyItem = (item, type) => action(MODIFY_ITEM, {type, key: item.key, item })