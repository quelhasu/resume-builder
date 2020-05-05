import uuid from 'uuid'

// Constant
const CREATE_EXPERIENCE = 'CREATE_EXPERIENCE'
const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE'
const MODIFY_EXPERIENCE = 'MODIFY_EXPERIENCE'

// Reducers
const initialData = [{
  key: "hehdedhe",
  title: 'Data Engineer',
  type: 'Intern',
  start_date: 'apr. 2019',
  end_date: 'aug. 2019',
  company: 'Amazon',
  location: 'Paris, France',
  desc:  `
    Automation of data extraction and transformation processes
    Integration of a Neo4j database with graph generation scripts
    Development of a REST API to process business logic
    Development of an interactive dashboard to visualize the data and facilitate analysis
    Development of an admin dashboard to manage processes and monitor databases
    Virtualization of micro services in Docker to facilitate reuse in other contexts
    `
},{
  key: "djziodjiozdjzd",
  title: 'Developpeur Mobile Hybride',
  type: 'Intern',
  start_date: 'apr. 2019',
  end_date: 'aug. 2019',
  company: 'Amazon',
  location: 'Paris, France',
  desc: 'hezufhezufhziuefhzefuzf'
}]

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