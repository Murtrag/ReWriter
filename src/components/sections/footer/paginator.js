import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import React, { useState } from 'react';


const Paginator = ({pages, activePage, changePage})=>{
	let [start, setStart] = useState(0);
	let [end, setEnd] = useState(20);
	const movePagination = (offset: number) => {
		const newStart = start + offset;
		const newEnd = end + offset;

		if (newStart >= 0 && newEnd <= pages.length) {
			setStart(newStart);
			setEnd(newEnd);
		}
	};

	const getPage = (pageNumber, index) => {
		const shouldRender = index >= start && index <= end;

		return shouldRender ? (
			<Pagination.Item
			active={index === activePage}
			key={pageNumber}
			onClick={() => changePage(pageNumber)}
			>
			{pageNumber + 1}
			</Pagination.Item>
		) : null;
	};


	return (
		<Container>
			<Row centered>
				<Col></Col>
				<Col>
					<Pagination> 
					<Pagination.First onClick={()=>movePagination(-5)}/>
					<Pagination.Prev  onClick={()=>movePagination(-1)}/>
					{pages.map(getPage)}
					<Pagination.Next onClick={()=>movePagination(1)}/>
					<Pagination.Last onClick={()=>movePagination(5)}/>
					</Pagination>
				</Col>
				<Col></Col>

			</Row>
		</Container>
	)
}
export default Paginator
