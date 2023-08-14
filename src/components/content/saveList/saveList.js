//Sorted
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { changeBook } from 'redux/actions';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import savesObj from './storage';
import Row from './row';


function SaveList({currentBook, changeBook, saveRow}) {
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
	  { saves.map((s,i)=><Row index={i} {...s} changeBook={changeBook} load={true} remove={setSaves}/>) }
	  { saveRow && <Row index={saves.length} title="Add new" currentBook={currentBook} page='---' note="---" time="---" add={setSaves}/> }
	  
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
