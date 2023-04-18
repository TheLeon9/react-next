import React from "react";
import style from "./Title.module.scss";
const TitleStyle = (props) => {
  return (
    <props.level
      className={` ${style[props.level]}  ${style[props.size]} ${
        style[props.className]
      }`}
    >
      {props.title}
    </props.level>
  );
};

export default TitleStyle;
