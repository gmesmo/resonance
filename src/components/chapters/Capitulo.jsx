import React, { useState } from "react";

import styles from "./Capitulo.module.css";
import Typewriter from "typewriter-effect";

import DateCheck from "../UI/DateCheck/DateCheck";

import moment from "moment";
import Button from "../UI/Button/Button";

moment.updateLocale("pt-br");

const Capitulo = (props) => {
  const [skip, setSkip] = useState(false);

  let Texto = props.text.map((text) => (
    <Typewriter
      key={"typping"}
      options={{ delay: 1 }}
      onInit={(typewriter) => {
        typewriter.pauseFor(3000).typeString(text).start();
      }}
    />
  ));

  if (skip) {
    Texto = props.text.map((text) => (
      <Typewriter
        key={"skipped"}
        onInit={(typewriter) => {
          typewriter.pasteString(text).start();
        }}
      />
    ));
  }

  const skipHandler = () => {
    setSkip(true);
  };

  const chaptNumber = props.chaptNumber - 1;

  let data_cap = moment(props.data, "YYYY-MM-DD").format("L");

  return (
    <>
      <DateCheck
        key={props.chaptNumber}
        classList={`${styles.main}`}
        style_={styles}
        data={data_cap}
      >
        <h2>
          {chaptNumber > 0 ? `Capítulo ${chaptNumber} - ` : ``} {props.title}
        </h2>
        <h5>Lançamento: {data_cap}</h5>
        <div className={`${styles.chapt} ${skip && styles.skipped}`}>
          {Texto}
        </div>
        {!skip && <Button onClick={skipHandler}>SKIP</Button>}
      </DateCheck>
    </>
  );
};

export default Capitulo;
