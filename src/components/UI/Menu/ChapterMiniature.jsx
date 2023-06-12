import React from "react";

import styles from "./ChapterMiniature.module.css";
import NumberVerify from "./NumberVerify";
import DateCheck from "../DateCheck/DateCheck";

const ChapterMiniature = (props) => {
  const selectChapterHandler = () => {
    props.selectedChapter(props.number);
  };

  return (
    <>
      <button
        key={props.number}
        className={`${styles.chapterMiniature}`}
        onClick={selectChapterHandler}
      >
        <NumberVerify className={styles.chaptNumber} number={props.number}>
          {`Capítulo - ${props.number}`}
        </NumberVerify>
        {props.number > 0 && <br />}
        {props.title}
      </button>
    </>
  );
};

export default ChapterMiniature;
