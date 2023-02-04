function textToHtml(text="", activeLetter, incorrect, indexStart){
	const getClass = (index, activeLetter, incorrect)=>{
		let resp = "";
		if (index===activeLetter){ resp += ' Active-letter' }
		if (incorrect.includes(index)){ resp += ' Incorrect-letter' }
		return resp
	}
	return text.split('').map((letter, index) =>{
		index+=indexStart;
		console.log(index)
		if (letter==='\n'){
			return <br key={`${index}${letter}`}/>
		}
		return <span key={`${index}${letter}`} className={getClass(index, activeLetter, incorrect)}>{letter}</span>
	})
}

function textToPages(text){
	let pageIndex = 0;
	const splitedData = [""]
	text.split('').forEach((el,i)=>{
		splitedData[pageIndex] = splitedData[pageIndex] + el
		if(i%600==0 && i !== 0){
			pageIndex++;
			splitedData.push("")
		}
	})
	return splitedData
}
export {
	textToHtml,
	textToPages
}
