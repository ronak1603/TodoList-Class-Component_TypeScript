export type InputProps = {
  addTodo: (data: string) => void;
  allComplete: (check: boolean) => void;
};

export type InputState = {
  data: string;
  check: boolean;
};
export type TasksProps = {
  key: string;
  id: string;
  isComplete: boolean;
  deleteTodo: (id: string) => void,
  completeTodo: (id: string) => void,
  editData: (id: string, data: string) => void,
  text: string;
};

export type TasksState = {
  edit: boolean;
  data: string;
};

export type showArr = {
  text: string;
  id: string;
  isComplete: boolean;
}[];

export type TaskListProps = {
  todos: {
    text: string,
    id: string,
    isComplete: boolean,
  }[],
  filter: string;
  toggleTodo: (toggle: string) => void;
  clearCompleted: () => void;
};
