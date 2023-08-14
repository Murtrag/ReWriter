const SAVE_BOOK= "SAVE_BOOK_ACTION";
const LOAD_BOOK= "LOAD_BOOK_ACTION";
const REMOVE_SAVE= "REMOVE_SAVED_BOOK_ACTION";
const RENAME_SAVE= "REMOVE_SAVED_BOOK_ACTION";

const saveBook = (title, content, page=0, activeLetter=0, incorrect)=>({
	type: SAVE_BOOK,
	payload:{
		title,
		content,
		page,
		activeLetter,
		incorrect
	}
})

// const loadBook = (title, content, page=0, activeLetter=0)=>({
// 	type: SAVE_BOOK,
// 	payload:{
// 		title,
// 		content,
// 		page
// 		activeLetter
// 		incorrect
// 	}
// })
export {
	SAVE_BOOK,
	saveBook,
	LOAD_BOOK,

	REMOVE_SAVE,
	RENAME_SAVE,
}
