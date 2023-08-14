const CHANGE_BOOK = "CHANGE_BOOK";
const PRESS_KEY = "PRESS_KEY";
const BACK_SPACE = "BACK_SPACE";
const CHANGE_PAGE = "CHANGE_PAGE";

const changeBook = (title, content, page=0, activeLetter=0)=>({
	type: CHANGE_BOOK,
	payload: {
		title,
		content,
		page,
		activeLetter
	}
})

const pressKey = (key, incorrect)=>({
	type: PRESS_KEY,
	payload: {
		key,
		incorrect
	}
})

const backSpace = (activeLetter)=>({
	type: BACK_SPACE,
	payload: {
		activeLetter
	}
})

const changePage = (page)=>({
	type: CHANGE_PAGE,
	payload: {
		page
	}
})

export {
	CHANGE_BOOK,
	changeBook,

	CHANGE_PAGE,
	changePage,

	PRESS_KEY,
	pressKey,

	BACK_SPACE,
	backSpace

}
