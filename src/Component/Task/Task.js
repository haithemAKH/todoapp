import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../JS/Action/ListTask'
import Edit from '../Edit/Edit'

import './Task.css'

const Task = ({ task }) => {
  // useDispatch hook to get the dispatch function from Redux
  const dispatch = useDispatch()

  return (
    <div className='task-container'>
      {/* Span element to display the task text */}
      <span className={task.isDone ? "done" : null}>{task.text}</span>

      {/* Edit component to edit the task */}
      <Edit task={task} />

      {/* Button to delete the task */}
      <Button variant="primary" onClick={() => dispatch(deleteTask(task.id))}>DELETE</Button>

      {/* Button to mark the task as done or undone */}
      <Button variant="primary" onClick={() => dispatch(doneTask(task.id))}>
        {task.isDone ? "unDone" : "Done"}
      </Button>
    </div>
  )
}

export default Task
