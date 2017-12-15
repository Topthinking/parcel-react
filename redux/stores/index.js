import { createStore,combineReducers } from 'redux'

import todo from './todo'

const reducers = combineReducers({
    todo
})

export default function configureStore(initiState = {}) { 
    const store = createStore(reducers, initiState)
    return store
}