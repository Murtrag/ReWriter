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

export {
	textToHtml,
	splitTextIntoPages,
	divideString
}
