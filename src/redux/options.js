// Constant 
const CHANGE_COLOR = 'CHANGE_COLOR'

// Reducers
const initialData = {
  color: "#0281CB"
}

export default function optionsReducer(state = initialData, action){
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.payload        
      }
    default:
      return state
  }
}

// Action helper
const action = (type, payload) => {
  return {type, payload}
}

// Actions Creator
export const changeColor = color => action(CHANGE_COLOR, color)