import "./App.css";
import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

import { useState } from "react";
import Navbar from "./components/Navbar";
import RequireAuth from "./hoc/RequireAuth";

const completedArray = [];

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onDelete = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const completedTodo = (todo) => {
    let newTodos = todos.filter((item) => item.id !== todo.id);
    let newCompletedTodos = todo;
    completedArray.push(newCompletedTodos);
    setTodos(newTodos);

    // console.log("completedArray:", completedArray)
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/todoapp"
          element={
            <RequireAuth>
              <Todo
                value={value}
                todos={todos}
                setValue={setValue}
                setTodos={setTodos}
                onDelete={onDelete}
                completedTodo={completedTodo}
                completedArray={completedArray}
              />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
