import React from "react";

import styles from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div id={styles.Menu}>
      <section className={styles.Upper}>
        <h1>Resonance</h1>
      </section>
      <section className={styles.Down}></section>
    </div>
  );
};

export default Menu;
