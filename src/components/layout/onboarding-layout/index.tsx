import React from "react";
import style from "@/styles/onboarding/index.module.scss";
import Logo from "@/components/shared/logo";

const OnboardingLayout = ({ children }: any) => {
  return (
    <div className={`container-fluid ${style.onboardingPageLayout}`}>
      <div className="container" id={style.div}>
        <Logo />
        <div className="row" id={style.row}>
          <div className="col-md-6" id={style.col}>
            <img src="/images/home/helloT.png" alt="" id={style.img} />
          </div>
          <div className="col-md-6" id={style.col}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
