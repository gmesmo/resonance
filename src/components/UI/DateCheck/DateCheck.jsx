import React, { useState } from "react";

import moment from "moment";
import "moment/locale/pt-br";

const DateCheck = (props) => {
  // const [data, setData] = useState(moment(props.data, "DDMMYYYY").fromNow());

  var a = new Date(moment(props.data, "YYYYMMDD"));
  var b = new Date();

  var difference = b.getTime() - a.getTime();
  var diff_day = difference / (1000 * 3600 * 24);

  if (props.type === "button") {
    console.log(diff_day);

    return (
      <button
        className={
          diff_day < 7
            ? `${props.style_.new} ${props.classList}`
            : `${props.style_.old} ${props.classList}`
        }
        onClick={props.onClick}
        style={{
          transitionDelay: `${(props.number + 1) * 0.15}s`,
          transitionDuration: `${0.5}s`,
        }}
      >
        {props.children}
      </button>
    );
  } else {
    console.log("log: " + diff_day);

    return (
      <div
        className={
          diff_day < 7
            ? `${props.style_.new} ${props.classList}`
            : `${props.style_.old} ${props.classList}`
        }
      >
        {props.children}
      </div>
    );
  }
};

export default DateCheck;
