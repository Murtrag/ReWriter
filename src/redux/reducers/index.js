import { combineReducers } from 'redux';
import { textReducer } from './textReducer';
import { savesReducer } from './savesReducer';


export default combineReducers({
	textReducer,
	savesReducer
})
