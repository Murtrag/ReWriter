import { SAVE_BOOK, saveBook } from '../actions/savesActions';

function savesReducer(
	state={},
	action
){
	switch(action.type){
		case SAVE_BOOK:
			console.log('save book!')

	}
	return state;
}



export {
	savesReducer
}
