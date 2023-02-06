import image from '../../../media/bookBook.webp';

import Content from '../../content/index';
import { pressKey, backSpace, changePage } from '../../../redux/actions'

import { connect, dispatch } from 'react-redux';

const Book = ({content,page, activeLetter, pressKey, incorrect, backSpace, changePage})=>{
	const style = {
		backgroundImage: `url("${image}")`,
	}
	const handleKeyDown = (el)=>{
		if(el.key.length===1 || el.key==="Enter"){
			if(activeLetter+1===content[page].length && page+1<content.length-1 ){
				changePage(page+1)
				return
			}
			pressKey(
				el.key,
				(content[page][activeLetter]!==el.key)? activeLetter:-1
			)
		}
		if(el.key==="ArrowLeft" && page - 1 >= 0){

			changePage(page-1)
		}
		if(el.key==="ArrowRight" && page + 1 <= content.length - 1){
			changePage(page+1)
		}
		if(el.key==="Backspace"){
			if(activeLetter-1<0){
				changePage(page-1)
				return
			}
			backSpace(
				activeLetter-1
			)
		}
		if([" ", "'"].includes(el.key)){
			el.preventDefault();
		}
	}


	return <div onKeyDown={(el)=>handleKeyDown(el)} tabIndex="0" className="Book-book" style={style} >
		<Content data={ content } activeLetter={activeLetter} incorrect={incorrect} page={page}/>
		</div>
}

const mapStateToProps = state=>({
	content: state.content,
	page: state.page,
	activeLetter: state.activeLetter,
	incorrect: state.incorrect
})
const mapDispatchToProps = dispatch=>({
	pressKey: (key, incorrect)=>dispatch(pressKey(key, incorrect)),
	backSpace: activeLetter=>dispatch(backSpace(activeLetter)),
	changePage: page=>dispatch(changePage(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(Book)
