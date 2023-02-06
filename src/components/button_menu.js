import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const ButtonMenu = ()=>{
	let navigate = useNavigate(); 
	const routeChange = () =>{ 
		let path = `/`; 
		navigate(path);
	}

	return (<>
		<Button onClick={routeChange} variant="warning">Back to menu</Button>{' '}
	</>)
}
export default ButtonMenu;
