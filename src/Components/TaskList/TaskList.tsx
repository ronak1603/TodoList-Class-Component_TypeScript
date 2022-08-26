import React from "react";

import { connect } from "react-redux";

import Input from "../Input/Input";
import Tasks from "../Tasks/Tasks";

import "./TaskList.css";

import { TaskListProps } from '../Types/Elements.types';
import { Dispatch } from "redux";
import { toggleTodo, clearCompleted } from "../../Store/ActionCreators";
import { showArr } from "../Types/Elements.types";


class TaskList extends React.Component<TaskListProps> {
  showAllTask = () => {
    this.props.toggleTodo("all");
  };

  showActiveTask = () => {
    this.props.toggleTodo("active");
  };


  showCompletedTask = () => {
    this.props.toggleTodo("complete");
  };


  render() {
    let arr: showArr = [];
    if (this.props.filter === "all")
      arr = this.props.todos;
    else if (this.props.filter === "active")
      arr = this.props.todos.filter((todo) => todo.isComplete === false);
    else if (this.props.filter === "complete")
      arr = this.props.todos.filter((todo) => todo.isComplete === true);
    return (

      <div id="overall_div">
        <Input />
        {this.props.todos.length > 0 ? <hr id="first"></hr> : <></>}
        <div id="todo_div">
          {arr.map((todo) => (
            <Tasks
              key={todo.id}
              id={todo.id}
              isComplete={todo.isComplete}
              text={todo.text}
            />
          ))}
        </div>
        {this.props.todos.length > 0 ? (
          <div id="button_div">
            <div id="remaining" className="button">
              {this.props.todos.filter((todo) => todo.isComplete === false).length}{" "}Items left
            </div>
            <div id="all_div" className="button">
              <button className={`${this.props.filter === "all" ? "clicked " : "all_button"}`} onClick={this.showAllTask}>All</button>
            </div>
            <div id="active_div" className="button">
              <button className={`${this.props.filter === "active" ? "clicked " : "active_button"}`} onClick={this.showActiveTask}>Active</button>
            </div>
            <div id="completed_div" className="button">
              <button className={`${this.props.filter === "complete" ? "clicked " : "completed_button"}`} onClick={this.showCompletedTask}>Complete</button>
            </div>
            <div id="clear_div" className="button">
              <button id="clear_button" onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>

    );
  }
}

const mapStateToProps = (state: TaskListProps) => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleTodo: (toggle: string) => dispatch(toggleTodo(toggle)),
    clearCompleted: () => dispatch(clearCompleted()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
