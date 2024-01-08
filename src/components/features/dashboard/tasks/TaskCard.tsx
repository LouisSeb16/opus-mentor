import React from "react";
import style from "@/styles/dashboard/task/index.module.scss";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";

const TaskCard = ({ props, handleDeleteTask }: any) => {
  const {
    taskTitle,
    taskDescription,
    taskCategory,
    taskDueDate,
    taskPriority,
    taskStatus,
    taskId,
  } = props;

  const pIds = (param: any) => {
    if (param === "High") return `${style.high}`;
    if (param === "Medium") return `${style.medium}`;
    if (param === "Low") return `${style.low}`;
  };

  const date = new Date(taskDueDate);
  const formatDescription = (text: any, number: number) => {
    return text?.length > number ? text.substring(0, 80) + "..." : text;
  };

  return (
    <>
      <div className={style.taskCard}>
        <div className={style.cardHeader}>
          <span id={pIds(taskPriority)}>{taskPriority}</span>
          <span>{taskCategory}</span>
        </div>

        <div className={style.body}>
          <h1>{taskTitle}</h1>
          <p>{formatDescription(taskDescription, 20)}</p>
        </div>

        <div className={style.footer}>
          {taskDueDate && (
            <span>
              <BsIcons.BsCalendar2Check /> <p>{date.toDateString()}</p>
            </span>
          )}

          <div className={style.icons}>
            <HiIcons.HiPencil id={style.icon} />
            <MdIcons.MdDeleteOutline
              id={style.icon}
              onClick={() => handleDeleteTask(taskId)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
