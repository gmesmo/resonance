import React, { useState } from "react";

import styles from "./Menu.module.css";
import Down from "./sections/Down";
import Up from "./sections/Up";
import Button from "../Button/Button";

const Menu = (props) => {
  const svg = (
    <svg
      fill="var(--writing-color)"
      className={styles.hamburger}
      viewBox="0 0 100 100"
      width="1.5rem"
    >
      <rect
        className={`${styles.line} ${styles.top}`}
        width="80"
        height="10"
        x="10"
        y="25"
        rx="5"
      ></rect>
      <rect
        className={`${styles.line} ${styles.middle}`}
        width="80"
        height="10"
        x="10"
        y="45"
        rx="5"
      ></rect>
      <rect
        className={`${styles.line} ${styles.bottom}`}
        width="80"
        height="10"
        x="10"
        y="65"
        rx="5"
      ></rect>
    </svg>
  );

  return (
    <div id={styles.Menu}>
      <Up>
        <h1>Resonance</h1>
        <Button key_id={"menu"} classes={"default"}>
          {svg}
        </Button>
      </Up>
      <Down />
    </div>
  );
};

export default Menu;
