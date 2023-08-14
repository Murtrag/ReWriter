// Sorted
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeBook } from '../../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import savesObj from './storage';

function Row({
	id,
	index,
	title,
	content,
	activeLetter,
	page,
	note,
	time,
	load,
	remove,
	add,
	currentBook,
	changeBook
}){
	const navigate = useNavigate();
	const handleAdd = ()=>{
		savesObj.addItem(currentBook);
		add(
			savesObj.loadAllItems()
		)
	}
	const handleLoad = ()=>{
		navigate('/book');
		changeBook(title, content.join(''), page, activeLetter);
	}
	const handleRemove = (id)=>{
		savesObj.removeItem({id: id})
		remove(
			savesObj.loadAllItems()
		)
	}
	return <tr key={id||0}>
		<td>{index}</td>
		<td>{title}</td>
		<td>{page+1}</td>
		<td>{note}</td>
		<td>{time}</td>
		<td>
			{load && <Button onClick={handleLoad}  variant="warning">
					<FontAwesomeIcon icon={faBook} />
				</Button>}
			{remove && <Button  onClick={()=>handleRemove(id)} variant="danger">
						<FontAwesomeIcon icon={faTrash} />
					</Button>}
			{add && <Button onClick={handleAdd}  variant="success">
					<FontAwesomeIcon icon={faPlus} />{' '}
					Add
					</Button>}
			
		</td>
	</tr>
}

export default Row
