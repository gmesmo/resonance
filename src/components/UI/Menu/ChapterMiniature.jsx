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
      <DateCheck
        key={props.number}
        number={props.number}
        classList={`${styles.chapterMiniature}`}
        style_={styles}
        onClick={selectChapterHandler}
        type={"button"}
        data={props.release}
      >
        <NumberVerify className={styles.chaptNumber} number={props.number}>
          {`Capítulo - ${props.number}`}
        </NumberVerify>

        {props.number > 0 && " | "}
        {props.title}
      </DateCheck>
    </>
  );
};

export default ChapterMiniature;
