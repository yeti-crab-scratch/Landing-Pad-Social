import { combineReducers } from "redux";
import userReducers from './userReducer.js'
import eventReducers from './eventReducer.js'

//combine reducers
const reducers = combineReducers({
    user: userReducers,
    event: eventReducers
})

export default reducers;