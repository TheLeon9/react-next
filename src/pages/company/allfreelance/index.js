import React from "react";
import style from "../index.module.scss";
import Title from "@/components/UI/Title";
import LogoDemon from "/public/img/Demon-Logo.svg";
import Logo from "@/components/UI/Logo";
import Link from "next/link";

export default function User() {
  return (
    <>
      <div className={style.middle}>
        <Title
          level="h1"
          title="See all Freelances"
          className="h1_pink"
        />
        <input
          type="text"
          placeholder="Make your search"
          className={style.input}
        />
      </div>
      <div className={style.card_cont}>
        <div className={style.card}>
          <div className={style.card_top}>
            <Logo src={LogoDemon.src} alt="Logo-Middle" width={40} />
            <Title
              level="h2"
              title="MORACCHINI Florian"
              className="h2_pink"
              size="big"
            />
            <div className={style.text_card_top_cont}>
              <p className="p p_small">4 / 5</p>
              <Link  href="/company/allfreelance/singlefreelance" className="btn btn_primary">View More</Link>
            </div>
          </div>
          <p className="p p_small">
            <span className="span span_small">Experience : </span>10 years
          </p>
          <p className="p p_small">
            <span className="span span_small">Num : </span>00 00 00 00 00
          </p>
          <p className="p p_small">
            <span className="span span_small">City : </span>Paris
          </p>
        </div>
      </div>
    </>
  );
}
