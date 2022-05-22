import React from "react";
import styles from "./todo.module.css";
import { useState } from "react";

const TodoItem = ({ todo, onDelete, completedTodo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  return (
    <div className={styles.todoitem} key={todo.id}>
      <div>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => {
            setIsCompleted(e.target.checked);
            completedTodo(todo);
          }}
          // getvalue={completeTodo(todo.id)}
        />
        <div className={isCompleted ? styles.striked : ""}>{todo.value}</div>
      </div>
      <button onClick={() => onDelete(todo.id)} className={styles.delete}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};

export default TodoItem;
