import { combineReducers } from 'redux'
import getAllDataReducer from '../reducers/getAllDataReducer'

const rootReducer= combineReducers({
    getAllData : getAllDataReducer

});

export default rootReducer;