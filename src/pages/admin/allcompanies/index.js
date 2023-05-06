import React from "react";
import style from "../index.module.scss";
import Title from "@/components/UI/Title";
import LogoDemon from "/public/img/Demon-Logo.svg";
import Logo from "@/components/UI/Logo";
import Link from "next/link";

export default function Index() {
  const deleteCompany = (e) => {
    e.preventDefault();
    console.log("delete");
  };
  return (
    <>
      <div className={style.middle}>
        <Title
          level="h1"
          title="See all Companies"
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
              <p className="p p_small">Ubisoft</p>
              <Link
                href="/admin/allcompanies/singlecompany"
                className="btn btn_primary"
              >
                View More
              </Link>
            </div>
          </div>
          <p className="p p_small">
            <span className="span span_small">Siret : </span>123 4555 7879
          </p>
          <p className="p p_small">
            <span className="span span_small">Status : </span>SAS
          </p>
          <p className="p p_small">
            <span className="span span_small">City : </span>Paris
          </p>
          <p className="p p_small">
            <span className="span span_small">Postal Code : </span>75000
          </p>
          <div className={style.button_cont}>
            <Link
              href="/admin/allcompanies/singlecompany/update"
              className="btn btn_primary"
            >
              UPDATE
            </Link>
            <button
              className="btn btn_secondary"
              onClick={(e) => deleteCompany(e)}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
