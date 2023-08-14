//Sorted
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { changeBook } from 'redux/actions';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { getObjectFromLocalStorage, LocalStorageArray } from 'utils';

const savesObj = new LocalStorageArray('saves');

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
	const handleAdd = ()=>{
		savesObj.addItem(currentBook);
		add(
			savesObj.loadAllItems()
		)
	}
	const handleLoad = ()=>{
		changeBook(title, content.join(''), page, activeLetter)
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
			{load && <Button onClick={handleLoad}  variant="warning">L</Button>}
			{remove && <Button  onClick={()=>handleRemove(id)} variant="danger">X</Button>}
			{add && <Button onClick={handleAdd}  variant="success">Add</Button>}
			
		</td>
	</tr>
}
function SaveList({currentBook, changeBook}) {
	console.log('change book ', changeBook)
	let [saves, setSaves] = useState([])
	useState(()=>{
		setSaves(
			savesObj.loadAllItems()
		)
	},[saves])

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Book name</th>
          <th>Page</th>
          <th>Note</th>
          <th>Date & Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
	  {saves.map((s,i)=><Row index={i} {...s} changeBook={changeBook} load={true} remove={setSaves}/>)}
	  <Row index={saves.length} title="Add new" currentBook={currentBook} page='---' note="---" time="---" add={setSaves}/>
	  
      </tbody>
    </Table>
  );
}

const mapStateToProps = ({textReducer})=>({
	currentBook: textReducer
})

const mapDispatchToProps = dispatch => ({
	changeBook: (title, content, page, activeLetter)=>dispatch(changeBook(title, content, page, activeLetter))
})

SaveList = connect(mapStateToProps, mapDispatchToProps)(SaveList)
export {
	SaveList	
}
