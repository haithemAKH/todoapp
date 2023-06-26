import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ListTask"

const initialState = {
    listTasks: [
        { id: Math.random(), text: "task1", isDone: false },
        { id: Math.random(), text: "task2", isDone: false },
        { id: Math.random(), text: "task3", isDone: false },
        { id: Math.random(), text: "task4", isDone: false },
        { id: Math.random(), text: "task5", isDone: false },
    ]
}

const listReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            // Add a new task to the listTasks array
            return { ...state, listTasks: [...state.listTasks, payload] }
        case DELETE_TASK:
            // Remove a task from the listTasks array based on the payload (task ID)
            return { ...state, listTasks: state.listTasks.filter(el => el.id !== payload) }
        case DONE_TASK:
            // Toggle the isDone property of a task in the listTasks array based on the payload (task ID)
            return {
                ...state,
                listTasks: state.listTasks.map(el => el.id === payload ? { ...el, isDone: !el.isDone } : el)
            }
        case EDIT_TASK:
            // Update the text of a task in the listTasks array based on the payload (task ID and newTask text)
            return {
                ...state,
                listTasks: state.listTasks.map(el => el.id === payload.id ? { ...el, text: payload.newTask } : el)
            }
        default:
            // Return the current state if the action type doesn't match any case
            return state;
    }
}

export default listReducer;
