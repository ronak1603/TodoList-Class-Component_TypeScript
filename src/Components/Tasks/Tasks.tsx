import React from "react";
import "./Tasks.css";
import { BsCircle } from "react-icons/bs";
import {ImCross} from "react-icons/im";
import { BsCheckCircle } from "react-icons/bs";
import { TasksProps } from "../Types/Elements.types";
import { TasksState } from "../Types/Elements.types";

class Tasks extends React.Component<TasksProps,TasksState> {
  constructor(props:TasksProps) {
    super(props);
    this.state = {
      edit: false,
      data: this.props.text,
    };
  }

  removeHandler = () => {
    this.props.onDelete(this.props.id);
  };

  completeHandler = () => {
    this.props.onComplete(this.props.id);
  };

  editTask = () => {
    this.setState({ edit: true });
  };

  editDataHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ data: e.target.value });
  };

  editDataSubmit = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.onEdit(this.state.data, this.props.id);
      this.setState({ edit: false });
    }
  };

  render() {
    let input = (
      <input
        id="edit_input"
        value={this.state.data}
        onChange={this.editDataHandler}
        onKeyPress={this.editDataSubmit}
      />
    );
    return (
      <>
        <div className="item_div">
          <div id="complete_div">
            {this.props.isComplete === true ? (
              <BsCheckCircle
                className="complete_icon"
                onClick={this.completeHandler}
              />
            ) : (
              <BsCircle
                className="complete_icon"
                onClick={this.completeHandler}
              />
            )}
          </div>
          <div
            id="todo_text_div"
            className={`${this.props.isComplete === true ? "complete" : ""}`}
            onDoubleClick={this.editTask}
          >
            {this.state.edit ? input : this.props.text}
          </div>
          <div id="delete_div"  >
            <ImCross id="delete_icon" onClick={this.removeHandler}/>
          </div>
        </div>
        <hr></hr>
      </>
    );
  }
}

export default Tasks;

