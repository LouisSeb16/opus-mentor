import DashboardLayout from "@/components/layout/dashboard-layout";
import React from "react";
import style from "@/styles/dashboard/overview/index.module.scss";
import Summary from "./Summary";

const OverviewComponent = () => {
  return (
    <>
      <DashboardLayout>
        <div className={style.overviewPage}>
          <h2>Dashboard</h2>
          <Summary/>
        </div>
      </DashboardLayout>
    </>
  );
};

export default OverviewComponent;
