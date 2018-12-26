import { combineReducers } from 'redux'
import posts from './postReducer.jsx'
const rootReducer = combineReducers({
  posts
})

export default rootReducer