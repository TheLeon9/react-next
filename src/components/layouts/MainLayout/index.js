import React from "react";
import style from "./index.module.scss";


const Index = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.square}>
        {children}
      </div>
    </div>
  );
};

export default Index;
