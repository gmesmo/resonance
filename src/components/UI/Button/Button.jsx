import React, { useState } from "react";

import styles from "./Button.module.css";

import { RxGear } from "react-icons/rx";

const Button = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const key_id = props.key_id;

  const menuOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (key_id === "menu") {
    return (
      <>
        <button
          key={key_id}
          id={key_id}
          className={styles[props.classes]}
          onClick={props.onClick}
          aria-expanded={props.menuStatus}
          data-state={props.menuStatus ? "open" : "closed"}
        >
          <svg
            fill="var(--writing-color)"
            className={styles.hamburger}
            viewBox="0 0 100 100"
            width="1.5rem"
          >
            <rect
              className={`${styles.line} ${styles.top}`}
              width="80"
              height="5"
              x="10"
              y="25"
              rx="5"
            ></rect>
            <rect
              className={`${styles.line} ${styles.middle}`}
              width="80"
              height="5"
              x="10"
              y="45"
              rx="5"
            ></rect>
            <rect
              className={`${styles.line} ${styles.bottom}`}
              width="80"
              height="5"
              x="10"
              y="65"
              rx="5"
            ></rect>
          </svg>
        </button>
      </>
    );
  } else if (key_id === "config") {
    return (
      <div id={styles.config_menu}>
        <RxGear
          className={`${styles.config} ${
            isMenuOpen ? styles.open : styles.closed
          }`}
          onClick={menuOpenHandler}
        />
      </div>
    );
  }

  return (
    <button className={styles[props.classes]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const currentState = button.getAttribute("data-state");

//     if (!currentState || currentState === "closed") {
//       button.setAttribute("data-state", "opened");
//       button.setAttribute("aria-expanded", "true");
//     } else {
//       button.setAttribute("data-state", "closed");
//       button.setAttribute("aria-expanded", "false");
//     }
//   });
// });
