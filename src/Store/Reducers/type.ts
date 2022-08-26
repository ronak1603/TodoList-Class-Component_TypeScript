interface addTodo {
    type: "ADD_TODO",
    payload: {
        id: string,
        text: string,
        isComplete: boolean,
    }
}

export interface deleteTodo {
    type: "DELETE_TODO",
    payload: {
        id: string,
    }
}

export interface completeTodo {
    type: "COMPLETE_TODO",
    payload: {
        id: string,
    }
}

interface editData {
    type: "EDIT_DATA";
    payload: {
        text: string;
        id: string;
    };
}

interface allComplete {
    type: "ALL_COMPLETE";
    payload: {
        check: boolean;
    };
}

interface toggleTodo {
    type: "TOGGLE_TODO";
    payload: {
        toggle: string;
    };
}

interface clearCompleted {
    type: "CLEAR_COMPLETED";
}


export type Action = addTodo | deleteTodo | completeTodo | allComplete | editData | toggleTodo | clearCompleted; 