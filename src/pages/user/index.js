import React from "react";
import style from "./index.module.scss";
import Title from "@/components/UI/Title";
import LogoDemonLion from "/public/img/Demon-Lion.svg";
import LogoDemon from "/public/img/Demon-Logo.svg";
import Logo from "@/components/UI/Logo";
import Link from "next/link";

export default function User() {
  return (
    <>
      <div className={style.top}>
        <div className={style.top_left}>
          <Logo src={LogoDemonLion.src} alt="Logo-Middle" width={60} />
          <Title
            level="h1"
            title="Furīransu World"
            className="h1_pink"
            size="big"
          />
        </div>
        <div className={style.top_right}>
          <Link href="/" className={`btn btn_secondary ${style.margin_for_button}`}>
            Register
          </Link>
          <Link
            href="/auth/login"
            className="btn btn_primary"
          >
            Login
          </Link>
        </div>
      </div>
      <div className={style.middle}>
        <Title level="h2" title="Welcome" className="h2_pink" size="big" />
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
            <p className="p p_small">4 / 5</p>
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
