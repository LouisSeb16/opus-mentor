import React from "react";
import style from "@/styles/layout/dashboard/index.module.scss";
import DashboardSideBar from "./DashboardSideBar";
import DashboardHeader from "./DashboardHeader";
import DashboardFooterNav from "./DashboardFooterNav";

const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <div className={style.dashboardLayout}>
        <div className={style.sideSection}>
          <DashboardSideBar />
        </div>
        <div className={style.mainSection}>
          <DashboardHeader />
          <div className={style.body}>{children}</div>
        </div>
        {/* <DashboardFooterNav /> */}
      </div>
    </>
  );
};

export default DashboardLayout;
