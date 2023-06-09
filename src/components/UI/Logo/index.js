import React from "react";
import style from "./Logo.module.scss";
const Logo = (props) => {
  return (
    <div className={style.img_cont}>
      <img src={props.src} className={style.img} width={props.width} alt={props.alt}/>
    </div>
  );
};

export default Logo;