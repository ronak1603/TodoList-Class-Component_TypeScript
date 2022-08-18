import "./App.css";
import React from "react";
import TodoHeading from "./Components/TodoHeading/TodoHeading";
import TaskList from "./Components/TaskList/TaskList";
import {
  BrowserRouter as Router
  , Routes,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/todo">Todo</Link>
                </li>
              </ul>
            </nav><Routes>
              <Route path="/todo" element={<><TodoHeading /><TaskList /></>}>
              </Route>
              <Route path="/" element={<h1>Home Page</h1>}>
              </Route>
            </Routes>
          </div>
        </Router>
        {/* <TodoHeading />
          <TaskList /> */}
      </div>
    );
  }
}

export default App;
