import { textToPages, textToHtml } from '../../utils';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { divideString } from '../../utils';
import React, { useRef, useEffect } from 'react';


const Content = ({ data, activeLetter, incorrect, page }) => {
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const minHeight = 835;
	const maxHeight = 840;


	useEffect(() => {
		if(leftRef.current.clientHeight !== 0){
			let fontSize = 2; // rem
			leftRef.current.style.fontSize = `2rem`;
			rightRef.current.style.fontSize = `2rem`;
			function resize(){
				// BOTH COLUMNS
				while (
					leftRef.current.clientHeight >  maxHeight
							||
					rightRef.current.clientHeight >  maxHeight
				) {
					// LEFT COLUMN
					let prevHeight = 0;
					while (leftRef.current.clientHeight >  maxHeight) {
						prevHeight = leftRef.current.clientHeight;
						fontSize -= .01;
						leftRef.current.style.fontSize = `${fontSize}rem`;
						if(prevHeight===leftRef.current.clientHeight){
							break
						}
					}
					// RIGHT COLUMN
					prevHeight = 0
					fontSize=2;
					while (rightRef.current.clientHeight >  maxHeight) {
						prevHeight = rightRef.current.clientHeight;
						fontSize -= .01;
						rightRef.current.style.fontSize = `${fontSize}rem`;
						if(prevHeight===rightRef.current.clientHeight){
							break
						}
					}

				}
			}
			resize()


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
