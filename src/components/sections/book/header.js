import image from '../../../media/bookHeader.webp';
import { changeBook } from '../../../redux/actions'
import { connect, dispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonMenu from '../../button_menu';

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
		<Row>
		<Col>

			<Form.Group controlId="formFileLg" className="mb-3">
				<Form.Control onChange={el=>handlSubmit(el)} accept=".txt" type="file" on />
			</Form.Group>
		</Col>
		<Col style={{textAlign: 'right'}}>
			<Button onClick={()=>console.log('save')} variant="warning">Save state</Button>{' '}
			<ButtonMenu />
		</Col>
		</Row>
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
