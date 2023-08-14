import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonMenu } from '../../buttons';
import Candle from './candle';


const HowToUse = ()=>{
	return <article>
		<Row>
		<Col xs={8} className="text-center">
		<h1>{'"How to use" my Interactive Book:'}</h1>
		<br />
		<br />
		<p>{"To start using the book, first choose 'New Book' from the menu. Then, navigate to the left side of the screen. There, you will find two buttons: one to load a text file, and another to paste text directly from your clipboard."} </p>
		<p>{'On the right side of the screen, you will find a button to save your current reading book. This way, you can easily access it later from the "saves" menu. '}</p>
		<br />
		<p>{"Once you've loaded a book, you can begin rewriting and reading it immediately. The following keyboard controls are available:"}</p>
		<ul>
		<li>{"Left arrow: turns to the previous page"}</li>
		<li>{"Right arrow: turns to the next page"}</li>
		<li>{"Arrow up: scrolls the page up"}</li>
		<li>{"Arrow down: scrolls the page down"}</li>
		</ul>
		<p>{"As you type, the cursor will move forward with each correctly typed letter. If you make a mistake, the incorrect letter will be highlighted in red. You can correct your mistake using the backspace key. "}</p>
		<br />
		<p>
		<strong>{"Important note:"}</strong>
		{" The saves are stored in your web browser's memory, so if you clear your browser cache, all saved books will be lost. "}
		</p>
		<ButtonMenu />
		</Col>
		{/*
	    <Col xs={4}>
		    <Candle />
	    </Col>
	    */}
		</Row>
		</article>
};

export default HowToUse




