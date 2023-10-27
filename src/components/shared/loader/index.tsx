import React from "react";
import style from "@/styles/loader/index.module.scss";
import Logo from "../logo";

const LoadingComponent = () => {
  return (
    <div className={style.loaderPage}>
      <Logo />
      <div className={style.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
