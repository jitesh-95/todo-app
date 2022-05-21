import React, { useState } from "react";
import styles from "./todo.module.css";
import Todolist from "./Todolist";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onDelete = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  
  
  return (
    <div className={styles.todoapp}>
      <h1>Todo</h1>
      <input
        className={styles.addTodo}
        type="text"
        placeholder="Type Something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        disabled={value.length === 0}
        className={styles.addButton}
        onClick={() => {
          setTodos([...todos, { id: Date.now(), value: value }]);
          setValue("");
        }}
      >
        Add
      </button>
      <div>
        <Todolist todos={todos} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Todo;
