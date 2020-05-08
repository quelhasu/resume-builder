import uuid from 'uuid'

// Constant
const CREATE_EDUCATION = 'CREATE_EDUCATION'
const DELETE_EDUCATION = 'DELETE_EDUCATION'
const MODIFY_EDUCATION = 'MODIFY_EDUCATION'

// Reducers
const initialData = []

export default function eduReducer(state = initialData, action){
  switch(action.type){
    case CREATE_EDUCATION:
      return [...state, action.payload]
    case DELETE_EDUCATION:
      return state.filter(edu => edu.key !== action.payload)
    case MODIFY_EDUCATION:
      const index = state.findIndex(el => el.key == action.payload.key)
      state[index] = action.payload.edu
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
export const createEdu = edu => action(CREATE_EDUCATION, {...edu, key: uuid() })
export const deleteEdu = edu => action(DELETE_EDUCATION, edu.key)
export const modifyEdu = edu => action(MODIFY_EDUCATION, {key:edu.key, edu})