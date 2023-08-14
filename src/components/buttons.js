//Sortd
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';

import { CustomModal } from './content/modal';



const ButtonMenu = ()=>{

	let navigate = useNavigate(); 
	const routeChange = () =>{ 
		let path = `/`; 
		navigate(path);
	}

	return (<>
		<Button onClick={routeChange} variant="warning">
			<FontAwesomeIcon icon={faArrowLeft} />{' '}
			Back to menu
		</Button>{' '}
	</>)
}

const ButtonSave = ()=>{
	const [modalShow, setModalShow] = useState(false);
	return (<>
		<Button onClick={()=>{setModalShow(true)}} variant="warning">
		<FontAwesomeIcon icon={faSave} />{' '}
		Save state
		</Button>{' '}
		<CustomModal title="Save book" show={modalShow} onHide={()=> setModalShow(false)}/>
	</>)
}
export {
	ButtonMenu,
	ButtonSave
}
