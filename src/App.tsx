import "./App.css";
import React from "react";
import TodoHeading from "./Components/TodoHeading/TodoHeading";
import TaskList from "./Components/TaskList/TaskList";

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <div></div>
          <TodoHeading />
          <TaskList />
        </div>
    );
  }
}

export default App;
