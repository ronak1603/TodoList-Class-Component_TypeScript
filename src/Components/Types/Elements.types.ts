export type InputProps = {
  onSubmit: (data: string) => void;
  onAllComplete: (check: boolean) => void;
};

export type InputState = {
  data: string;
  check: boolean;
};
export type TasksProps = {
  key: string;
  id: string;
  isComplete: boolean;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onEdit: (newdata: string, id: string) => void;
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

export type TaskListProps = {};

export type TaskListState = {
  todos: {
    text: string;
    id: string;
    isComplete: boolean;
  }[];
  show: string;
};


