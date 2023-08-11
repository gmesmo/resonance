import React, { useState } from "react";
import { isMobile } from "react-device-detect";

import styles from "./ChapterSelector.module.css";
import Chapters from "../../chapters/list/chapters";
import ChapterMiniature from "./ChapterMiniature";

import {
  BsChevronDown,
  BsChevronUp,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

const ChapterSelector = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const selectedChapterHandler = (chapterNumber) => {
    setIsOpen(false);
    props.pageChange(chapterNumber);
  };
  // const chaptersList = JSON.parse(chapters);

  const renderButton = () => {
    if (isMobile) {
      return (
        <button className={styles.menuDrawer} onClick={menuOpenHandler}>
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      );
    }
    return (
      <button className={styles.menuDrawer} onClick={menuOpenHandler}>
        {isOpen ? <BsChevronLeft /> : <BsChevronRight />}
      </button>
    );
  };

  return (
    <div id={styles.Menu} className={isOpen ? styles.active : ""}>
      <div>
        {Chapters.chapters.map((chapt, i) => (
          <ChapterMiniature
            key={chapt.number}
            title={chapt.title}
            number={chapt.number}
            release={chapt.release}
            selectedChapter={selectedChapterHandler}
          />
        ))}
      </div>

      {renderButton()}
    </div>
  );
};

export default ChapterSelector;
