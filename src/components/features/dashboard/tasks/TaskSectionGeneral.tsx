import React from "react";
import style from "@/styles/dashboard/task/index.module.scss";
import * as BsIcons from "react-icons/bs";
import TaskCard from "./TaskCard";

const TaskSectionGeneral = () => {
  return (
    <div className={style.taskSection}>
      <div className="row">
        <div className="col-md-3" id={style.col}>
          <div className={style.sections}>
            <div id={style.sectionHeader}>
              <div id={style.left}>
                <div>
                  <span></span>
                  <h3>To do</h3>
                </div>
                <p>4</p>
              </div>
              <BsIcons.BsThreeDotsVertical className={style.menu} />
            </div>
            <button>
              <i>
                <BsIcons.BsPlus />
              </i>
              <p>Add New Task</p>
            </button>
            <div id={style.sectionBody}>
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
        </div>
        <div className="col-md-3" id={style.col}>
          <div className={style.sections}>
            <div id={style.sectionHeader}>
              <div id={style.left}>
                <div>
                  <span></span>
                  <h3>In Progress</h3>
                </div>
                <p>4</p>
              </div>
              <BsIcons.BsThreeDotsVertical className={style.menu} />
            </div>
            <button>
              <i>
                <BsIcons.BsPlus />
              </i>
              <p>Add New Task</p>
            </button>
            <div id={style.sectionBody}>
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
        </div>
        <div className="col-md-3" id={style.col}>
          <div className={style.sections}>
            <div id={style.sectionHeader}>
              <div id={style.left}>
                <div>
                  <span></span>
                  <h3>Completed</h3>
                </div>
                <p>4</p>
              </div>
              <BsIcons.BsThreeDotsVertical className={style.menu} />
            </div>
            <button>
              <i>
                <BsIcons.BsPlus />
              </i>
              <p>Add New Task</p>
            </button>
            <div id={style.sectionBody}>
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
        </div>
        <div className="col-md-3" id={style.col}>
          <div className={style.sections}>
            <div id={style.sectionHeader}>
              <div id={style.left}>
                <div>
                  <span></span>
                  <h3>Expired</h3>
                </div>
                <p>4</p>
              </div>
              <BsIcons.BsThreeDotsVertical className={style.menu} />
            </div>
            <button>
              <i>
                <BsIcons.BsPlus />
              </i>
              <p>Add New Task</p>
            </button>
            <div id={style.sectionBody}>
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskSectionGeneral;
