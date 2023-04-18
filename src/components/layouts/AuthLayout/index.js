import React from "react";
import ImageLogin from "/public/img/sword.svg";
import ImageRegister from "/public/img/katana-doubled.svg";
import ImageAbout from "/public/img/Demon-Logo.svg";
import style from "./index.module.scss";
import Logo from "../../UI/Logo";
import { useRouter } from "next/router";

const Index = ({ children }) => {
  const location = useRouter();
  let logoSrc;
  if (location.pathname === "/auth/login") {
    logoSrc = ImageLogin.src;
  } else if (location.pathname === "/auth/about") {
    logoSrc = ImageAbout.src;
  }else if (location.pathname === "/auth/register") {
    logoSrc = ImageRegister.src;
  } else {
    logoSrc = ImageRegister.src;
  }
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left__part}>{children}</div>
        <div className={style.right__part}>
            <Logo src={logoSrc} alt="auth" width={200} />
        </div>
      </div>
    </div>
  );
};

export default Index;
