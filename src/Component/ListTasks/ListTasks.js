import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
import { Button } from 'react-bootstrap'
import './ListTasks.css'

const ListTasks = () => {
  // useSelector hook to access the list of tasks from the Redux store
  const list = useSelector(state => state.listReducer.listTasks)

  // useState hook to manage the status filter
  const [status, setStatus] = useState("ALL")

  return (
    <div className='ListT'>
      {/* Button to show all tasks */}
      <Button onClick={() => setStatus("ALL")}>ALL</Button>
      {/* Button to show completed tasks */}
      <Button onClick={() => setStatus("DONE")}>DONE</Button>
      {/* Button to show incomplete tasks */}
      <Button onClick={() => setStatus("UNDONE")}>UNDONE</Button>
      
      {/* Conditional rendering based on the status filter */}
      {status === "DONE" ?
        // Filters and maps only completed tasks
        list.filter((el) => el.isDone === true).map((el) => <Task task={el} key={el.id} />) :
        status === "UNDONE" ?
        // Filters and maps only incomplete tasks
        list.filter((el) => el.isDone === false).map(el => <Task task={el} key={el.id} />) :
        // Maps all tasks
        list.map(el => <Task task={el} key={el.id} />)
      }
    </div>
  )
}

export default ListTasks
