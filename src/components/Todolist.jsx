import React from "react";
import TodoItem from "./TodoItem";
import styles from './todo.module.css'

const Todolist = ({ todos, onDelete }) => {
  return (
    <div className={styles.todo}>
      {todos.map((el) => (
        <TodoItem key={el.id} todo={el} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Todolist;
