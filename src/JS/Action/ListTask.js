import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ListTask"

export const addTask = (newTask) => {
    // Action creator for adding a new task
    return {
        type: ADD_TASK,
        payload: newTask,
    }
}

export const deleteTask = (id) => {
    // Action creator for deleting a task
    return {
        type: DELETE_TASK,
        payload: id,
    }
}

export const doneTask = (id) => {
    // Action creator for marking a task as done
    return {
        type: DONE_TASK,
        payload: id,
    }
}

export const editTask = (id, newTask) => {
    // Action creator for editing a task
    return {
        type: EDIT_TASK,
        payload: { id, newTask },
    }
}
