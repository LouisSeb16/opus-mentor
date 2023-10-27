import React from "react";
import style from "@/styles/home/index.module.scss";
import { useRouter } from "next/router";
import Logo from "@/components/shared/logo";

const Main = () => {
  const router = useRouter();
  const handleRoute = (page: string) => router.push(page);

  return (
    <div className={`container-fluid ${style.homePage}`}>
      <div className="container" id={style.div}>
        <Logo />
        <div className="row" id={style.row}>
          <div className="col-md-6" id={style.col}>
            <img src="/images/home/helloT.png" alt="" id={style.img} />
          </div>
          <div className="col-md-6" id={style.col}>
            <h1>
              Welcome to <span>Opus</span>Mentor
            </h1>
            <p>
              We are thankful you have decided to make us part of your journey.
              We are here to make task management efficient, easy and smooth for
              you.
            </p>
            <p>We hope you have the best experience on our platform.</p>

            <div id={style.btns}>
              <button onClick={() => handleRoute("/login")}>Login</button>
              <button onClick={() => handleRoute("/signup")}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
