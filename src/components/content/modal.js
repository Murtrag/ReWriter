//Sorted
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { SaveList } from './saveList/saveList';


function CustomModal({ show, onHide, title }) {
  return (
    <Modal size="lg" show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
	  {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
	  <SaveList saveRow={true} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export {
	CustomModal,
}
