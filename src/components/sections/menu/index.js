import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Candle from './candle';
import Center from './center';


const Menu = ()=>{
	return (
		<div className="Menu-lower">
		<Row centered>
			<Col className="Candle-space">
				<Candle />
			</Col>
			<Col className="Center text-center">
				<Center />
			</Col>
			<Col className="Candle-space">
				<Candle />
			</Col>

		</Row>
		</div>
	)
}
export default Menu
