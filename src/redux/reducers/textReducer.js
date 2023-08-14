import { CHANGE_BOOK, PRESS_KEY, BACK_SPACE, CHANGE_PAGE } from '../actions';
import { splitTextIntoPages, getUniqueArray } from '../../utils';

const emptyState = {
	title:"",
	content:[""] ,
	page:0,
	activeLetter:0,
	incorrect: []
}

function textReducer(
	state=emptyState,
	action
){
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
				incorrect: getUniqueArray([
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
	textReducer
}
