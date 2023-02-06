import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonMenu from '../../button_menu';
import Candle from './candle';

const FromAuthor = ()=>{
	return <article><Row>
		<Col xs={8} className="text-center">
			<h1>{"Hello everyone!"}</h1>
			<p>{"I\'m the author of an interactive book project, where you can import"}</p>
			<p>{"any .txt file and practice touch typing while enjoying the text at the same time."}</p>
			<p>{"I created this project for my own personal use, to improve my touch typing skills,"}</p>
			<p>{"but I\'m thrilled to share it with others for free."}</p>
			<br />
			<p>{"I believe that anyone should have the opportunity to benefit from this application,"}</p>
			<p>{"which is why it\'s completely free to use."}</p>
			<p>{"There are some ads included, but they are just there to help cover the cost of my hard work."}</p>
			<p>{"Rest assured that the ads are not intrusive and will not interfere with your experience."}</p>
			<br />
			<p>{"As I continue to develop this project, it will be tailored to my own personal needs,"}</p>
			<p>{"but I\'m always open to suggestions and ideas."}</p>
			<p>{"If you have any feedback or suggestions, please don\'t hesitate to let me know!"}</p>
			<br />
			<p>{"Finally, this project is also a part of my portfolio."}</p>
			<p>{"If you\'re interested in hiring a programmer like me, please feel free to contact me."}</p>
			<p>{"I would be happy to discuss any potential opportunities with you."}</p>
			<p>{"Thank you for your time and I hope you enjoy using my interactive book!"}</p>
		<ButtonMenu />
		</Col>
		{/*
		<Col xs={4}>
			<Candle />
		</Col>
		*/}
		</Row></article>
}
export default FromAuthor
