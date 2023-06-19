import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  const key_id = props.key_id;

  if (key_id === "menu") {
    return (
      <>
        <input
          key={key_id}
          id={key_id}
          className={styles[props.classes]}
          onClick={props.onClick}
          type={"checkbox"}
          style={{ display: "none" }}
        />
        <label htmlFor={key_id}>{props.children}</label>
      </>
    );
  }

  return (
    <button className={styles[props.classes]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
