import React from "react";
import style from "./Link.module.scss";
import Link from "next/link";
const LinkStyle = (props) => {
  return (
    <div className={style.link_card}>
      <div className={style.link_cont}>
      <Link href={props.link} className={style.a_nav}>
        {props.cont}
      </Link>
      </div>
      <p className={`${style.p} p`}>Lorem ipsum dolor sit amet Ronaldo</p>
    </div>
  );
};

export default LinkStyle;
