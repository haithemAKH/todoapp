import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../../JS/Action/ListTask';
import './AddTask.css'

const AddTask = () => {
    // useState hook to manage the input text state
    const [text,setText] = useState("")
    // useDispatch hook to get the dispatch function from Redux
    const dispatch = useDispatch()
    // Event handler for adding a task
    const handleAdd =(e) => {
        e.preventDefault()
        if (text) {
             // Dispatches the addTask action with a new task object
            dispatch(addTask({id : Math.random() , text , isDone : false }))
        }
        else {
            alert("can not add an emty task")}
    }
  return (

    <div className='addform'>
  <Form onSubmit={handleAdd} >
    <Form.Control  placeholder="Enter Task Title" onChange={(e)=> setText(e.target.value)} value={text} />
  <Button variant="primary" type="submit" onClick={handleAdd}>
    ADD
  </Button>
  </Form>
    </div>
  )
}

export default AddTask