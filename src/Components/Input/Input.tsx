import React from "react";
import "./Input.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { InputProps } from "../Types/Elements.types";
import { InputState } from "../Types/Elements.types";

class Input extends React.Component<InputProps, InputState> {
  constructor(props:InputProps) {
    super(props);
    this.state = {
      data: "",
      check: false,
    };
  }
  inputTaskHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
    this.setState({ data: e.target.value });
  };
  inputTaskSubmit = (e : React.KeyboardEvent<HTMLInputElement>):void => {
    if (e.key === "Enter" && this.state.data !== "") {
      this.props.onSubmit(this.state.data);
      this.setState({ data: "" });
    }
  };
  allCompleteTaskHandler = () => {
    if (this.state.check === false) this.setState({ check: true });
    else this.setState({ check: false });
    this.props.onAllComplete(this.state.check);
  };

  render() {
    return (
      <>
        <div id="input_div">
          <div id="icon">
            <RiArrowDropDownLine
              id="complete_icon"
              onClick={this.allCompleteTaskHandler}
            />
          </div>
          <div id="inner_div">
            <input
              id="todo_input"
              type="text"
              value={this.state.data}
              placeholder="What needs to be done?"
              onChange={this.inputTaskHandler}
              onKeyPress={this.inputTaskSubmit}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Input;
