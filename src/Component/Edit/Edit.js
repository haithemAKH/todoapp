import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/Action/ListTask';
import './Edit.css'

const Edit = ({ task }) => {
  // useState hook to manage the visibility of the modal
  const [show, setShow] = useState(false);

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Function to show the modal
  const handleShow = () => setShow(true);

  // useState hook to manage the new task value
  const [newTask, setNewTask] = useState(task.text);

  // useDispatch hook to get the dispatch function from Redux
  const dispatch = useDispatch();

  // Event handler for editing a task
  const handleEdit = () => {
    dispatch(editTask(task.id, newTask));
    handleClose();
  };

  return (
    <div className='formE'>
      {/* Button to open the modal */}
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      {/* Modal component */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* Title for the modal */}
          <Modal.Title style={{ textAlign: 'center', marginTop: '10px' }}>
            <h2>Edit</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: 'center' }}>
          {/* Input field for editing the task */}
          <Form.Control placeholder="Edit task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        </Modal.Body>
        <Modal.Footer style={{ textAlign: 'center', marginTop: '10px' }}>
          {/* Button to close the modal */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Button to save the edited task */}
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
