import React from "react";
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import "./Tasks.css";
import { BsCircle } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { BsCheckCircle } from "react-icons/bs";
import { TasksProps } from "../Types/Elements.types";
import { TasksState } from "../Types/Elements.types";
import { deleteTodo, completeTodo, editData } from "../../Store/ActionCreators/index"


class Tasks extends React.Component<TasksProps, TasksState> {
  constructor(props: TasksProps) {
    super(props);
    this.state = {
      edit: false,
      data: this.props.text,
    };
  }

  removeHandler = () => {
    this.props.deleteTodo(this.props.id);
  };

  completeHandler = () => {
    this.props.completeTodo(this.props.id);
  };

  editTask = () => {
    this.setState({ edit: true });
  };

  editDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ data: e.target.value });
  };

  editDataSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.editData(this.props.id, this.state.data);
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
            <ImCross id="delete_icon"
              onClick={this.removeHandler}
            />
          </div>
        </div>
        <hr></hr>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteTodo: (id: string) => dispatch(deleteTodo(id)),
    completeTodo: (id: string) => dispatch(completeTodo(id)),
    editData: (id: string, data: string) => dispatch(editData(id, data)),
  }
}

export default connect(null, mapDispatchToProps)(Tasks);

