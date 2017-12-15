import { Map } from 'immutable'

// constant
const ADD_TODO = 'ADD_TODO'


const initiState = Map({})

// action
export const add = (data) => { 
    return {
        type: ADD_TODO,
        data
    }
}

// reducers
export default function todo(state = initiState, action) { 
    switch (action.type) { 
        case ADD_TODO: 
                return state.set(ADD_TODO,action.data)
            break;   
        default:
            return state    
    }
}

