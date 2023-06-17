import React, { useState } from "react";

import styles from "./Menu.module.css";
import Down from "./sections/Down";
import Up from "./sections/Up";
import Button from "../Button/Button";

const Menu = (props) => {
  return (
    <div id={styles.Menu}>
      <Up>
        <h1>Resonance</h1>
        <Button classes={"default"}></Button>
      </Up>
      <Down />
    </div>
  );
};

export default Menu;
