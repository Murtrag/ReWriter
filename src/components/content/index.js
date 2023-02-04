import { textToPages, textToHtml } from '../../utils';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { divideString } from '../../utils';
import React, { useRef, useEffect } from 'react';


const Content = ({ data, activeLetter, incorrect, page }) => {
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const minHeight = 800;
	const maxHeight = 840;
	let fontSize = 2; // rem

	let prevHeight = 0;
	function lowerFont(ref, otherRef){
		try{
			if (prevHeight == ref.current.clientHeight){
				fontSize = fontSize + 0.01;
				lowerFont(otherRef)
			}
			if (ref.current.clientHeight >  maxHeight) {
				prevHeight = ref.current.clientHeight;
				fontSize = fontSize - 0.01;
				ref.current.style.fontSize = `${fontSize}rem`;
				lowerFont(ref, otherRef)
			}
		}catch(err){}
	}

	function upperFont(ref){
		let prevHeight = 0;
		while (ref.current.clientHeight <  minHeight) {
			fontSize = fontSize + 0.01;
			ref.current.style.fontSize = `${fontSize}rem`;
		}
	}

	useEffect(() => {
		if(rightRef.current.clientHeight !== 0){
			lowerFont(rightRef)
			upperFont(rightRef)
			lowerFont(rightRef)
			upperFont(rightRef)

			lowerFont(leftRef)
			upperFont(leftRef)
			lowerFont(leftRef)
			upperFont(leftRef)

		}
	}, [page]);


	data = divideString(data[page]);
	return (
		<Container>
			<Row centered>
				<Col  ref={leftRef} className="Left-page" md={{}}>
					{textToHtml(data[0], activeLetter, incorrect, 0)}
				</Col>
				<Col  ref={rightRef} className="Right-page" xs={{ offset: 1 }}>
					{textToHtml(data[1], activeLetter, incorrect, data[0].length + 1)}
				</Col>
			</Row>
		</Container>
	);
};

export default Content;
