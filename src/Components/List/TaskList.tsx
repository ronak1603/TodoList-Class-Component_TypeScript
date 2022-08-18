import React from "react";
import Input from "../Input/Input";
import Tasks from "../Tasks/Tasks";
import { v4 as uuidv4 } from 'uuid';
import "./TaskList.css";
import {TaskListProps} from '../Types/Elements.types';
import { TaskListState } from "../Types/Elements.types";
import { showArr } from "../Types/Elements.types";

class TaskList extends React.Component<TaskListProps, TaskListState> {
  constructor(props:TaskListProps) {
    super(props);
    this.state = {
      todos: [],
      show:"all",
    };
  }

  inputSubmitHandler = (data:string) => {
    let newid = uuidv4();
    this.setState((prev) => ({
      todos: [
        ...prev.todos,
        { text: data, id: newid ,isComplete:false },
      ],
    }));
  };

  deleteTaskHandler = (id:string) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  };

  completeTaskHandler = (id:string) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) => {
        if (todo.id === id) {
          if (todo.isComplete === false) return { ...todo, isComplete:true };
          else return { ...todo, isComplete:false };
        } else return todo;
      }),
    }));
  };

  allCompleteTaskHandler = (check:boolean) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) => {
        if (check === false) return { ...todo, isComplete:true };
        else if (check === true) return { ...todo, isComplete:false };
        else return todo;
      }),
    }));
  };

  activeShowHandler = () => {
    this.setState({ show: "active" });
  };

  allShowHandler = () => {
    this.setState({show:"all"});
  };

  completeShowHandler = () => {
    this.setState({ show: "complete" });
  };

  clearCompleteHandler = () => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.isComplete === false),
    }));
  };

  editTaskHandler = (newdata:string, id:string) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) => {
        if (todo.id === id) return { ...todo, text: newdata };
        else return todo;
      }),
    }));
  };

  render() {
    let arr:showArr =[];
    if(this.state.show === "all")
    arr = this.state.todos;
    else if(this.state.show === "active")
    arr = this.state.todos.filter((todo)=>todo.isComplete===false);
    else if(this.state.show === "complete")
    arr = this.state.todos.filter((todo)=>todo.isComplete === true);
    return (
      <>
        <div id="overall_div">
          <Input
            onSubmit={this.inputSubmitHandler}
            onAllComplete={this.allCompleteTaskHandler}
          />
          {this.state.todos.length > 0 ? <hr id="first"></hr> : <></>}
          <div id="todo_div">
            {arr.map((todo) => (
              <Tasks
                key={todo.id}
                id={todo.id}
                isComplete={todo.isComplete}
                onDelete={this.deleteTaskHandler}
                onComplete={this.completeTaskHandler}
                onEdit={this.editTaskHandler}
                text={todo.text}
              />
            ))}
          </div>
          {this.state.todos.length > 0 ? (
            <div id="button_div">
              <div id="remaining" className="button">
                {
                  this.state.todos.filter((todo) => todo.isComplete === false)
                    .length
                }{" "}
                Items left
              </div>
              <div id="all_div" className="button">
                <button
                  className={`${
                    this.state.show === "all" ? "clicked " : "all_button"
                  }`}
                  onClick={this.allShowHandler}
                >
                  All
                </button>
              </div>
              <div id="active_div" className="button">
                <button
                  className={`${
                    this.state.show === "active" ? "clicked " : "active_button"
                  }`}
                  onClick={this.activeShowHandler}
                >
                  Active
                </button>
              </div>
              <div id="completed_div" className="button">
                <button
                  className={`${
                    this.state.show === "complete" ? "clicked " : "completed_button"
                  }`}
                  onClick={this.completeShowHandler}
                >
                  Complete
                </button>
              </div>
              <div id="clear_div" className="button">
                <button id="clear_button" onClick={this.clearCompleteHandler}>
                  Clear Completed Tasks
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </>
    );
  }
}

export default TaskList;
