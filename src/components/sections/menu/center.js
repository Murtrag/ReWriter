import { useNavigate } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

const Center = ()=>{
	const navigate = useNavigate();
	function handleClick(path) {
		navigate(path);
	}

	return (
		<Nav defaultActiveKey="/home" as="ul" className="flex-column">

			<Nav.Item as="li">
				<Nav.Link onClick={()=>handleClick("/book")}>New Book</Nav.Link>
			</Nav.Item>

			<Nav.Item as="li">
				<Nav.Link onClick={()=>handleClick("/saves")}>Saves</Nav.Link>
			</Nav.Item>

			<Nav.Item as="li">
				<Nav.Link onClick={()=>handleClick("/settings")}>Settings</Nav.Link>
			</Nav.Item>

			<Nav.Item as="li">
				<Nav.Link onClick={()=>handleClick("/how-to-use")}>How To Use</Nav.Link>
			</Nav.Item>

			<Nav.Item as="li">
				<Nav.Link onClick={()=>handleClick("/from-author")}>From Author</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}
export default Center;
