import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles[props.classes]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
