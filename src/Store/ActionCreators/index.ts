import { v4 as uuidv4 } from "uuid";
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, ALL_COMPLETE, EDIT_DATA, TOGGLE_TODO, CLEAR_COMPLETED } from "../Actions/AddTodo";
export const addTodo = (data: string) => {
    let newId: string = uuidv4();
    return {
        type: ADD_TODO,
        payload: { text: data, id: newId, isComplete: false },
    };
};

export const deleteTodo = (id: string) => {
    return {
        type: DELETE_TODO,
        payload: { id: id },
    };
};

export const completeTodo = (id: string) => {
    return {
        type: COMPLETE_TODO,
        payload: { id: id },
    }
}

export const allComplete = (check: boolean) => {
    return {
        type: ALL_COMPLETE,
        payload: { check: check }
    };
}

export const editData = (id: string, data: string) => {
    return {
        type: EDIT_DATA,
        payload: {
            id: id,
            text: data,
        }
    }
}

export const toggleTodo = (toggle: string) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            toggle: toggle,
        }
    }
};

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
    }
}

