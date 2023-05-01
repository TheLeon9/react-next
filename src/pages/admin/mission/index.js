import React from "react";
import LogoDemon from "/public/img/Demon-Logo.svg";
import style from "../index.module.scss";
import Logo from "@/components/UI/Logo";
import Title from "@/components/UI/Title";
import Link from "next/link";
export default function Index() {
  const deleteMission = (e) => {
    e.preventDefault();
    console.log("delete");
  };
  return (
    <div className={style.mission_company_cont}>
      <Title level="h1" title="Sell all Missions" className="h1_pink" />
      <div className={style.card_cont}>
        <div className={style.card}>
          <div className={style.card_top}>
            <Logo src={LogoDemon.src} alt="Logo-Middle" width={40} />
            <Title
              level="h2"
              title="Mission Title"
              className="h2_pink"
              size="big"
            />
            <div className={style.text_card_top_cont}>
              <p className="p p_small">Ubisoft</p>
              <p className="p p_small">3000$</p>
            </div>
          </div>
          <p className="p p_small">
            <span className="span span_small">Start : </span>10/08/2023
          </p>
          <p className="p p_small">
            <span className="span span_small">End : </span>10/08/2025
          </p>
          <span className="span span_small">Description : </span>
          <p className="p p_small">Lorem ipsum dolor sit amet ronaldo pepito</p>
          <div className={style.button_cont}>
            <Link href="/admin/mission/update" className="btn btn_primary">
              UPDATE
            </Link>
            <button
              className="btn btn_secondary"
              onClick={(e) => deleteMission(e)}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
