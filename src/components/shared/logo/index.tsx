import Link from "next/link";
import React from "react";
import style from "@/styles/logo/index.module.scss";

const Logo = () => {
  return (
    <>
      <Link legacyBehavior href={"/"}>
        <img src="/images/logo/logo.png" alt="" id={style.logo} />
      </Link>
    </>
  );
};

export default Logo;
