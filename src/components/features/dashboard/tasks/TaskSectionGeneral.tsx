import React from "react";
import style from "@/styles/dashboard/task/index.module.scss";
import TaskCard from "./TaskCard";
import TaskPopUp from "./TaskPopUp";

const TaskSectionGeneral = (props: any) => {
  const {
    store: { openCreateTaskModal, overViewData, taskSortedData },
    actions: { handleDeleteTask },
  } = props;

  return (
    <>
      {openCreateTaskModal && <TaskPopUp {...props} />}

      <div className={style.taskSection}>
        <div className="row">
          <div className="col-md-3" id={style.col}>
            <div className={style.sections}>
              <div id={style.sectionHeader}>
                <div id={style.left}>
                  <div>
                    <h3>To do</h3>
                  </div>
                  <span>{overViewData.upComing}</span>
                </div>
              </div>
              <div id={style.sectionBody}>
                {taskSortedData.upComing
                  .toReversed()
                  .map((data: any, index: any) => (
                    <TaskCard
                      key={index}
                      props={data}
                      handleDeleteTask={handleDeleteTask}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="col-md-3" id={style.col}>
            <div className={style.sections}>
              <div id={style.sectionHeader}>
                <div id={style.left}>
                  <div>
                    <h3>In Progress</h3>
                  </div>
                  <span>{overViewData.progress}</span>
                </div>
              </div>
              <div id={style.sectionBody}>
                {taskSortedData.progress
                  .toReversed()
                  .map((data: any, index: any) => (
                    <TaskCard
                      key={index}
                      props={data}
                      handleDeleteTask={handleDeleteTask}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="col-md-3" id={style.col}>
            <div className={style.sections}>
              <div id={style.sectionHeader}>
                <div id={style.left}>
                  <div>
                    <h3>Completed</h3>
                  </div>
                  <span>{overViewData.done}</span>
                </div>
              </div>
              <div id={style.sectionBody}>
                {taskSortedData.done
                  .toReversed()
                  .map((data: any, index: any) => (
                    <TaskCard
                      key={index}
                      props={data}
                      handleDeleteTask={handleDeleteTask}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="col-md-3" id={style.col}>
            <div className={style.sections}>
              <div id={style.sectionHeader}>
                <div id={style.left}>
                  <div>
                    <h3>Expired</h3>
                  </div>
                  <span>{overViewData.expired}</span>
                </div>
              </div>
              <div id={style.sectionBody}>
                {taskSortedData.expired
                  .toReversed()
                  .map((data: any, index: any) => (
                    <TaskCard
                      key={index}
                      props={data}
                      handleDeleteTask={handleDeleteTask}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskSectionGeneral;
