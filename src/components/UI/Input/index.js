import React from "react";
import style from "./Input.module.scss";
const InputStyle = (props) => {
  return (
    <div className={style.input_wrapper}>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        required={props.required}
        placeholder={props.placeholder}
        onChange={props.onChange}  
        />
        {props.label && <label>{props.label}</label>}
    </div>
  );
};

export default InputStyle;
