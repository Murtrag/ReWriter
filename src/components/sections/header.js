import image from '../../media/bookHeader.webp';
import { changeBook } from '../../redux/actions'
import { connect, dispatch } from 'react-redux';
const Header = ({changeBook})=>{
	const style = {
		backgroundImage: `url("${image}")`,
	}

	const handlSubmit = (el)=>{
		const reader = new FileReader();
		const fileAnchor = el.target.files[0]
		reader.readAsText(fileAnchor, "UTF-8");
		setTimeout(()=>{
			changeBook(
				fileAnchor.name,
				reader.result
			)
		},100)
	}

	return <div className="Book-header" style={style} >
		<input type="file" accept=".txt" onChange={el=>handlSubmit(el)}/>
		</div>
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
	changeBook: (title, content)=>dispatch(changeBook(title, content))
})

export default connect(
	state=>({}),
	mapDispatchToProps
)(Header)
