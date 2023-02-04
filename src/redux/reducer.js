import { CHANGE_BOOK, PRESS_KEY, BACK_SPACE, CHANGE_PAGE } from './actions';
import { splitTextIntoPages } from '../utils';

function removeDuplicates(arr) {
	let unique = [];
	arr.forEach(element => {
		if (!unique.includes(element)) {
			unique.push(element);
		}
	});
	return unique;
}


const rootReducer = (state={title:"", content:[""] ,page:0, activeLetter:0, incorrect: []}, action)=>{
	switch(action.type){
		case CHANGE_BOOK:
			return {
				...state,
				...action.payload,
				content: splitTextIntoPages(action.payload.content)
			}

		case CHANGE_PAGE:
			return {
				...state,
				...action.payload,
				activeLetter:0,
				incorrect: [],
				
			}
		case PRESS_KEY:
			return {
				...state,
				incorrect: removeDuplicates([
					...state.incorrect,
					action.payload.incorrect,
				]),
				activeLetter: state.activeLetter+1
			}
		case BACK_SPACE:
			return {
				...state,
				activeLetter: action.payload.activeLetter,
				incorrect: state.incorrect.filter(inco=>inco!==action.payload.activeLetter )
			}
	}
	return state
}

export { 
	rootReducer
}
