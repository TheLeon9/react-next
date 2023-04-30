import React from "react";
import { useRouter } from "next/router";
import style from "./index.module.scss";
import Link from "next/link";
import LogoDemonLion from "/public/img/Demon-Lion.svg";
import Logo from "@/components/UI/Logo";
import Title from "@/components/UI/Title";
const Index = ({ children }) => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.square}>
        <div className={style.header}>
          <div className={style.header_left}>
            <div className={style.logo_cont}>
              <Logo src={LogoDemonLion.src} alt="Logo-Middle" width={60} />
              <div>
              <Title
                level="h2"
                title="Furīransu World"
                className="h2_pink"
                size="big"
              />
              <span className="span span_light">F.Moracchini</span>
              </div>
            </div>
            <div className="nav_cont">
              <Link
                href="/company"
                className={`basic_link ${
                  router.pathname === "/company" ? style.active : ""
                }`}
              >
                Profile
              </Link>
            </div>
            <div className="nav_cont">
              <Link
                href="/company/mission"
                className={`basic_link ${
                  router.pathname === "/company/mission" ? style.active : ""
                }`}
              >
                Missions
              </Link>
            </div>
            <div className="nav_cont">
              <Link
                href="/company/allfreelance"
                className={`basic_link ${
                  router.pathname === "/company/allfreelance" ? style.active : ""
                }`}
              >
                Freelances
              </Link>
            </div>
            <div className="nav_cont">
              <Link
                href="/company/update"
                className={`basic_link ${
                  router.pathname === "/company/update" ? style.active : ""
                }`}
              >
                Update Profile
              </Link>
            </div>
          </div>
          <Link href="/" className="btn btn_primary">
            LOGOUT
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Index;
