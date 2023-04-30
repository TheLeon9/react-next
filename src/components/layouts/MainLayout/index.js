import React from "react";
import style from "./index.module.scss";
import { useRouter } from "next/router";


const Index = ({ children }) => {
  const location = useRouter();
  let classU;
  if (location.pathname === "/user") {
    classU =  <div className={style.square_user}>{children}</div>;
  } else {
    classU =  <div className={style.square}>{children}</div>;
  }
  return (
    <div className={style.container}>
        {classU}
    </div>
  );
};

export default Index;
