function textToHtml(text="", activeLetter, incorrect, indexStart){
	const getClass = (index, activeLetter, incorrect)=>{
		let resp = "";
		if (index===activeLetter){ resp += ' Active-letter' }
		if (incorrect.includes(index)){ resp += ' Incorrect-letter' }
		return resp
	}
	return text.split('').map((letter, index) =>{
		index+=indexStart;
		if (letter==='\n'){
			return <br key={`${index}${letter}`}/>
		}
		return <span key={`${index}${letter}`} className={getClass(index, activeLetter, incorrect)}>{letter}</span>
	})
}

function splitTextIntoPages(text, maxPageLength = 1000) {
	let pageIndex = 0;
	let currentPage = "";
	const pages = [];

	const words = text.split(" ");
	for (const word of words) {
		currentPage += word + " ";

		if (currentPage.length >= maxPageLength) {
			pages.push(currentPage.trim());
			currentPage = "";
			pageIndex++;
		}
	}

	if (currentPage) {
		pages.push(currentPage.trim());
	}

	return pages;
}

function divideString(str) {
	let words = str.split(' ');
	let mid = Math.floor(words.length / 2);
	let firstHalf = words.slice(0, mid).join(' ');
	let secondHalf = words.slice(mid).join(' ');
	return [firstHalf, secondHalf];
}

function getUniqueArray(arr) {
	let response = [];
	arr.forEach(element => {
		if (!response.includes(element)) {
			response.push(element);
		}
	});
	return response;
}


class LocalStorageArray {
	constructor(key) {
		this.key = key;
	}

	addItem(item) {
		console.log('itme :', item)
		let items = this.loadAllItems();
		const now = new Date()
		items.push({
			...item,
			id: now.getTime(),
			time: `${now.getDay()}/${now.getMonth()+1}/${now.getFullYear()}\
			(${now.getHours()}:${now.getMinutes()}:${now.getSeconds()})` 

		});
		localStorage.setItem(this.key, JSON.stringify(items));
	}

	getItem(...kwargs) {
		let items = localStorage.getItem(this.key);
		items = items ? JSON.parse(items) : [];
		return items.filter(item => {
			for (let key in kwargs) {
				if (item[key] !== kwargs[key]) {
					return false;
				}
			}
			return true;
		});
	}

	loadAllItems() {
		let items = localStorage.getItem(this.key);
		return items ? JSON.parse(items) : [];
	}

	removeItem(kwargs) {
		let items = this.loadAllItems();
		let index = items.findIndex(item => item.id === kwargs.id);
		if (index > -1) {
			items.splice(index, 1);
			localStorage.setItem(this.key, JSON.stringify(items));
		}
	}

	removeAllItems() {
		localStorage.removeItem(this.key);
	}
}




export {
	textToHtml,
	splitTextIntoPages,
	divideString,
	getUniqueArray,
	LocalStorageArray
}
