import DashboardLayout from "@/components/layout/dashboard-layout";
import React from "react";
import style from "@/styles/dashboard/overview/index.module.scss";
import Summary from "./Summary";
import * as BsIcons from "react-icons/bs";

const OverviewComponent = () => {
  return (
    <>
      <DashboardLayout>
        <div className={style.overviewPage}>
          <div className={style.taskHeader}>
            <h2>Dashboard</h2>
            <button>
              <i>
                <BsIcons.BsPlus />
              </i>
              <p>Create Task</p>
            </button>
          </div>
          <Summary />
        </div>
      </DashboardLayout>
    </>
  );
};

export default OverviewComponent;
