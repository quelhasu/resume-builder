import uuid from 'uuid'

// Constant
const UPDATE_PROFILE = 'UPDATE_PROFILE'
const UPDATE_SOCIAL = 'UPDATE_SOCIAL'

// Reducers

const initialData = {
  info: {},
  social: {
    phone: '',
    email: '',
    github: '',
    linkedin: ''
  }
}

export default function profileReducer(state = initialData, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return { ...state, info: action.payload }
    case UPDATE_SOCIAL:
      state.social[action.payload.type] = action.payload.value
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
export const updateProfile = profile => action(UPDATE_PROFILE, profile)
export const updateSocial = (type, value) => action(UPDATE_SOCIAL, { type, value })

// export const updateProfile = (name, value) => 
//   action(UPDATE_PROFILE, {
//     key: uuid(),
//     name, 
//     value
//   })