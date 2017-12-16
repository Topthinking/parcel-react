import { Map } from 'immutable'

// constant
const ADD_TODO = 'ADD_TODO'
const HANDLE_TODO = 'HANDLE_TODO'
const DELETE_TODO = 'DELETE_TODO'


const initiState = Map([])

export const NAME = 'TODO_DATA'

// action
export const add = (data) => { 
    return {
        type: ADD_TODO,
        data
    }
}

export const del = (data) => { 
    return {
        type: DELETE_TODO,
        data
    }
}

export const handle = (data) => { 
    return {
        type: HANDLE_TODO,
        data
    }
}

// reducers
export default function todo(state = initiState, action) { 
    const data = state.get(NAME)
    switch (action.type) { 
        case ADD_TODO:             
            return state.set(NAME,[action.data,...data])
            break;
        case HANDLE_TODO: 
            data[action.data].finish = !data[action.data].finish
            return state.set(NAME,[...data])
            break; 
        case DELETE_TODO: 
            const newData = data.filter((v,k)=> k != action.data)  
            return state.set(NAME,newData)
        break;     
        default:
            const _list = []
            const initiData = [...Array(1000)].map((item, index) => { 
                _list.push({
                    name: Math.random(),
                    finish: false,
                    id:index
                })
            })    
            return state.set(NAME,_list)    
    }
}

