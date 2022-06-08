import React from "react";
import styles from "./todo.module.css";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from "uuid";
import Completed from "./Completed";



const Todo = ({
  value,
  todos,
  setValue,
  setTodos,
  onDelete,
  completedTodo,
  completedArray,
}) => {
  let showCompleted = completedArray.length;

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
          setTodos([...todos, { id: uuidv4(), value: value }]);
          setValue("");
        }}
      >
        Add
      </button>
      <div>
        <Todolist
          todos={todos}
          onDelete={onDelete}
          completedTodo={completedTodo}
        />
      </div>
      <div className={showCompleted === 0 ? styles.hide : styles.show}>
        <Completed completedArray={completedArray} />
      </div>
    </div>
  );
};

export default Todo;
