import Nav from 'react-bootstrap/Nav';

const Center = ()=>{
	return (
		<Nav defaultActiveKey="/home" as="ul" className="flex-column">

			<Nav.Item as="li">
				<Nav.Link href="/book">New Book</Nav.Link>
			</Nav.Item>

			<Nav.Item as="li">
				<Nav.Link href="/save">Saves</Nav.Link>
			</Nav.Item>

			<Nav.Item as="li">
				<Nav.Link href="/settings">Settings</Nav.Link>
			</Nav.Item>

			<Nav.Item as="li">
				<Nav.Link href="/how-to-use">How To Use</Nav.Link>
			</Nav.Item>

			<Nav.Item as="li">
				<Nav.Link href="/from-author">From Author</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}
export default Center;
