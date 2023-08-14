// Sorted
import { SaveList } from 'components/content/saveList/saveList';
import { ButtonMenu } from 'components/buttons';
import Candle from './candle';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Saves = ()=>{
	return <article><Row>
		<Col xs={8} className="text-center">
		<article> 
			<SaveList />
		</article>
		<ButtonMenu />
		</Col>
		{/*
		<Col xs={4}>
			<Candle />
		</Col>
		*/}
		</Row></article>
}
export default Saves;
