import React from "react";
import style from "@/styles/dashboard/task/popup.module.scss";
import { motion } from "framer-motion";
import * as MdIcons from "react-icons/md";
import { opusMentorConfig } from "@/sdk";

const TaskPopUp = (props: any) => {
  const {
    store: {
      tasks,
      taskId,
      taskCreatedByUser,
      openCreateTaskModal,
      taskTitle,
      taskDescription,
      taskCategory,
      taskDueDate,
      taskPriority,
      taskStatus,
      overViewData,
    },
    actions: {
      setOpenCreateTaskModal,
      setTaskTitle,
      setTaskDescription,
      setTaskCategory,
      setTaskDueDate,
      setTaskPriority,
      setTaskStatus,
      createTask,
      deleteTask,
      editTask,
      handleCreateNewTask,
      clearForm,
    },
  } = props;

  const listTwo = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  };
  return (
    <div className={style.taskPopup}>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ type: "linear" }}
        variants={listTwo}
        className={`${style.modal} ${
          openCreateTaskModal ? style.show : style.hide
        }`}
      >
        <div className={style.header}>
          <h2>Create a new task</h2>
          <button
            onClick={() => {
              setOpenCreateTaskModal(false);
              clearForm();
            }}
          >
            <MdIcons.MdOutlineClose />
          </button>
        </div>
        <div className={style.body}>
          <input
            type="text"
            placeholder="Task title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols={10}
            rows={3}
            placeholder="Task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={style.footer}>
          <div id={style.dropdowns}>
            <select
              name=""
              id=""
              value={taskStatus}
              onChange={(e) => setTaskStatus(e.target.value)}
            >
              <option value="" disabled>
                Todo
              </option>
              {opusMentorConfig.constants.taskBluePrint.sections.map(
                (data: any, index: any) => (
                  <option value={data.title} key={index}>
                    {data.title}
                  </option>
                )
              )}
            </select>
            <select
              name=""
              id=""
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
            >
              <option value="" disabled>
                Priority
              </option>
              {opusMentorConfig.constants.taskBluePrint.priority.map(
                (data: any, index: any) => (
                  <option value={data.title} key={index}>
                    {data.title}
                  </option>
                )
              )}
            </select>
            <select
              name=""
              id=""
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
            >
              <option value="" disabled>
                Labels
              </option>
              {opusMentorConfig.constants.taskBluePrint.label.map(
                (data: any, index: any) => (
                  <option value={data.title} key={index}>
                    {data.title}
                  </option>
                )
              )}
            </select>

            <input
              type="date"
              name=""
              id=""
              value={taskDueDate}
              onChange={(e) => setTaskDueDate(e.target.value)}
            />
          </div>
          <button onClick={handleCreateNewTask}>Create Task</button>
        </div>
      </motion.div>
    </div>
  );
};

export default TaskPopUp;
