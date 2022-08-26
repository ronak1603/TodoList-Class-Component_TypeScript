import { Action } from './type';
const initialState: stateType = {
    todos: [],
    filter: "all",
}

interface stateType {
    todos: {
        text: string,
        id: string,
        isComplete: boolean
    }[],
    filter: string,
}
const todo = (state = initialState, action: Action) => {
    switch (action.type) {
        case ('ADD_TODO'):
            return {
                ...state,
                todos: [...state.todos, {
                    id: action.payload.id,
                    text: action.payload.text,
                    isComplete: false
                }]

            }
        case ('DELETE_TODO'):
            return {
                ...state,
                todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)]
            }

        case ('COMPLETE_TODO'):

            return {
                ...state,
                todos: [
                    ...state.todos.map((todo) => {
                        if (todo.id === action.payload.id) {
                            return { ...todo, isComplete: !todo.isComplete };
                        } else return todo;
                    }),
                ],
            };

        case ('ALL_COMPLETE'):

            return {
                ...state,
                todos: [
                    ...state.todos.map((todo) => {
                        if (action.payload.check === false) {
                            return { ...todo, isComplete: true };
                        } else if (action.payload.check === true) {
                            return { ...todo, isComplete: false };
                        } else return todo;
                    }),
                ],
            }
        case ('EDIT_DATA'):
            return {
                ...state,
                todos: [
                    ...state.todos.map((todo) => {
                        if (todo.id === action.payload.id) {
                            return { ...todo, text: action.payload.text };
                        } else return todo;
                    }),
                ],
            };

        case ('TOGGLE_TODO'):
            return {
                ...state,
                filter: action.payload.toggle,
            };

        case ('CLEAR_COMPLETED'):
            return {
                ...state,
                todos: [...state.todos.filter((todo) => todo.isComplete !== true)],
            };

        default: return state
    }
}

export default todo;