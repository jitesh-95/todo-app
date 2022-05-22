import React from "react";
import styles from "./todo.module.css";

const Completedtodos = ({ finish }) => {
  return (
    <div >
      {finish.map((item) => {
        return (
          <div key={item.id} className={styles.comDiv}>
            <input className={styles.checkbox} type="checkbox" defaultChecked />
            <div className={styles.striked}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Completedtodos;
