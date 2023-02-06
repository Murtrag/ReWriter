import flame from '../../../media/flame.gif';
import candle from '../../../media/candle.png';

const Candle = ()=>{
	const flameStyle = {
		width: '16%',
		position: 'relative',
		left: '33.1%',
		transform: 'translateY(-298.3px)',
	}
	return <div>
		<img style={flameStyle} src={flame} />
		<img src={candle} />
		</div>
}
export default Candle
