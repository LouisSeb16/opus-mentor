import DashboardLayout from "@/components/layout/dashboard-layout";
import React from "react";
import style from "@/styles/dashboard/task/index.module.scss";
import * as BsIcons from "react-icons/bs";

const TasksComponent = () => {
  return (
    <>
      <DashboardLayout>
        <div className={style.taskPage}>
          <div className={style.taskHeader}>
            <h2>Tasks</h2>
            <button>
              <i>
                <BsIcons.BsPlus />
              </i>
              <p>Create Task</p>
            </button>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default TasksComponent;
