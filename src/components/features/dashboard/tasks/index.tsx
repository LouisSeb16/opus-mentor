import DashboardLayout from "@/components/layout/dashboard-layout";
import React from "react";
import style from "@/styles/dashboard/task/index.module.scss";
import TaskSectionGeneral from "./TaskSectionGeneral";
import { opusMentorHooks } from "@/sdk";
import * as BsIcons from "react-icons/bs";

const Main = (props: any) => {
  const {
    store: {},
    actions: { setOpenCreateTaskModal },
  } = props;
  return (
    <>
      <DashboardLayout>
        <div className={style.taskPage}>
          <div className={style.taskHeader}>
            <h2>Tasks</h2>
            <button onClick={() => setOpenCreateTaskModal(true)}>
              <i>
                <BsIcons.BsPlus />
              </i>
              <p>Add New Task</p>
            </button>
          </div>
          <TaskSectionGeneral {...props} />
        </div>
      </DashboardLayout>
    </>
  );
};

export default function TasksComponent() {
  return <Main {...opusMentorHooks.dashboardHooks.taskHooks.default()} />;
}
