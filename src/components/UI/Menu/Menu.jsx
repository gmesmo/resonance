import React, { useState } from "react";

import Chapters from "../../chapters/list/chapters";

import styles from "./Menu.module.css";
import Down from "./sections/Down";
import Up from "./sections/Up";
import Button from "../Button/Button";
import ChapterMiniature from "./ChapterMiniature";

const Menu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const selectedChapterHandler = (chapterNumber) => {
    props.pageChange(chapterNumber);
    setIsMenuOpen(!isMenuOpen);
  };

  const menuOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id={styles.Menu}>
      <Up>
        <h1>Resonance</h1>
        <Button
          key_id={"menu"}
          classes={"default"}
          onClick={menuOpenHandler}
          menuStatus={isMenuOpen}
        />
        <section className={styles.chapters}>
          {Chapters.chapters.map((chapt, i) => (
            <ChapterMiniature
              key={chapt.number}
              title={chapt.title}
              number={chapt.number}
              release={chapt.release}
              selectedChapter={selectedChapterHandler}
            />
          ))}
        </section>
      </Up>
      <Down />
    </div>
  );
};

export default Menu;
