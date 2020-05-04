import uuid from 'uuid'

// Constant
const CREATE_EXPERIENCE = 'CREATE_EXPERIENCE'

// Reducers
const initialData = []

export default function expReducer(state = initialData, action){
  switch(action.type){
    case CREATE_EXPERIENCE:
      return [...state, action.payload]
    default:
      return state
  }
}

// Action helper
const action = (type, payload) => {
  return {type, payload}
}

// Actions Creator
export const createExp = exp => action(CREATE_EXPERIENCE, {
  key: uuid(),
  exp
})