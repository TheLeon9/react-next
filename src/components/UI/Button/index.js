import React from "react";
import style from "./Button.module.scss";
const ButtonStyle = (props) => {
  return (
    <div className={style.button_container}>
      <button
        type={props.type}
        onClick={props.handleClick}
        className={`${style.btn} ${style[props.className]}`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default ButtonStyle;
