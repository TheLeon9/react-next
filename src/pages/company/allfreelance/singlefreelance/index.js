import React from "react";

import style from "../../index.module.scss";

export default function Freelance() {
  return (
    <div className={style.info_company_cont}>
      <div className={style.info_user}>
        <p className="p p_small">
          <span className="span span_pink">FirstName : </span>Florian
        </p>
        <p className="p p_small">
          <span className="span span_pink">LastName : </span>Moracchini
        </p>
        <p className="p p_small">
          <span className="span span_pink">Email : </span>f.mor@gmail.com
        </p>
        <p className="p p_small">
          <span className="span span_pink">Address : </span>9 rue du wow
        </p>
        <p className="p p_small">
          <span className="span span_pink">Number : </span>0000000000
        </p>
        <p className="p p_small">
          <span className="span span_pink">Postal Code : </span>00000
        </p>
        <p className="p p_small">
          <span className="span span_pink">City : </span>Uwu
        </p>
      </div>
      <div className={style.info_company}>
        <p className="p p_small">
          <span className="span span_pink">Rating : </span>5/5
        </p>
        <p className="p p_small">
          <span className="span span_pink">Years of experience : </span> 15
        </p>
      </div>
    </div>
  );
}
