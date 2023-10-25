import DashboardLayout from "@/components/layout/dashboard-layout";
import React from "react";
import style from "@/styles/dashboard/task/index.module.scss";
import TaskSectionGeneral from "./TaskSectionGeneral";

const TasksComponent = () => {
  return (
    <>
      <DashboardLayout>
        <div className={style.taskPage}>
          <h2>Tasks</h2>
          <TaskSectionGeneral />
        </div>
      </DashboardLayout>
    </>
  );
};

export default TasksComponent;
