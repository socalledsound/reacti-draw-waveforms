import { createStore, applyMiddleware, combineReducers } from 'redux'
import { AudioMiddleware } from './Audio/AudioMiddleware'

const middlewares = applyMiddleware(AudioMiddleware)

const rootReducer = combineReducers({
    
})


const store = createStore(rootReducer, middlewares)

export default store