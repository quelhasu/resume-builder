import uuid from 'uuid'

// Constant
const CREATE_EXPERIENCE = 'CREATE_EXPERIENCE'
const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE'
const MODIFY_EXPERIENCE = 'MODIFY_EXPERIENCE'

// Reducers
const initialData = []

export default function expReducer(state = initialData, action){
  switch(action.type){
    case CREATE_EXPERIENCE:
      return [...state, action.payload]
    case DELETE_EXPERIENCE:
      return state.filter(exp => exp.key !== action.payload)
    case MODIFY_EXPERIENCE:
      const index = state.findIndex(el => el.key == action.payload.key)
      state[index] = action.payload.exp
      return state
    default:
      return state
  }
}

// Action helper
const action = (type, payload) => {
  return {type, payload}
}

// Actions Creator
export const createExp = exp => action(CREATE_EXPERIENCE, {...exp, key: uuid() })
export const deleteExp = exp => action(DELETE_EXPERIENCE, exp.key)
export const modifyExp = exp => action(MODIFY_EXPERIENCE, {key:exp.key, exp})