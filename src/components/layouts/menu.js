import backgroundImage from '../../media/books-wallpaper.jpeg';
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';


const Layout = ()=>{
	const style = {
		backgroundImage: `url(${backgroundImage})`, 
	}
	return (
		<div className="Menu" style={style}>
			<Container>
				<Outlet />
			</Container>
		</div>
	)
}
export default Layout
