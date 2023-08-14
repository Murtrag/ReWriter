import image from '../../../../media/bookFooter.webp';
import { changePage } from '../../../../redux/actions'
import { connect, dispatch } from 'react-redux';

import Paginator from './paginator';


const Footer = ({pages, activePage, changePage})=>{
	const style = {
		backgroundImage: `url("${image}")`,
	}
	const handleClick = (page)=>{
		changePage(page);
	}
	return <div className="Book-footer" style={style} >
			<Paginator pages={pages} activePage={activePage} changePage={changePage} />
		</div>
}

const mapStateToProps = ({textReducer})=>({
	pages: textReducer.content.map((_,i)=>i),
	activePage: textReducer.page
})

const mapDispatchToProps = (dispatch)=>({
	changePage: page=>dispatch(changePage(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(Footer)
