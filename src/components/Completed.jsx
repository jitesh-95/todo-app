import React, { useState } from "react";
import Completedtodos from "./Completedtodos";
import styles from "./todo.module.css";

const Completed = ({ completedArray }) => {
  const [finish, setFinsih] = useState([]);
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setFinsih(completedArray);
          setToggle(!toggle);
        }}
        className={styles.completedBtn}
      >
        {toggle ? "Hide Completed Todos" : "Show Completed Todos"}
      </button>
      {toggle ? <Completedtodos finish={finish} /> : null}
    </div>
  );
};

export default Completed;
