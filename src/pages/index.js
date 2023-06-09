import React from "react";
import style from "@/styles/index/index.module.scss";
import LinkStyle from "@/components/Link";
import Logo from "@/components/UI/Logo";
import LogoDemon from "/public/img/Demon-Lion.svg";
import Title from "@/components/UI/Title";
import Link from "next/link";

export default function Home() {
  const menu = [
    {
      title: "about",
      link: "/auth/about",
    },
    {
      title: "login",
      link: "/auth/login",
    },
    {
      title: "register company",
      link: "/auth/register/company",
    },
    {
      title: "register freelance",
      link: "/auth/register/freelance",
    },
  ];
  return (
      <>
        <div className={style.top}>
              <div className={style.top_left}>
                  <p className="p p_small">First Project made in <span className="span span_medium">Next Js</span></p>
              </div>
              <div className={style.top_right}>
                  <Title level="h2" title="By" className="h2_white" size="medium"/>
                  <Title level="h1" title="Leon" className="h1_pink" size="big"/>
              </div>
        </div>
        <div className={style.middle}>
          <Logo src={LogoDemon.src} alt="Logo-Middle" width={200}/>
        </div>
        <div className="nav_cont">
        <Link href="/user" className="basic_link">
          User Home
        </Link>
        </div>
        <div className={style.bottom}>
          {menu.map((post) => {
            return <LinkStyle link={post.link} cont={post.title}/>
          })}
        </div>
      </>
  );
}
