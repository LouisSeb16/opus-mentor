import React from "react";
import style from "@/styles/dashboard/task/index.module.scss";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";

const TaskCard = () => {
  return (
    <div className={style.taskCard}>
      <div className={style.cardHeader}>
        <span>Branding</span>
        <BsIcons.BsThreeDotsVertical className={style.menu} />
      </div>

      <div className={style.body}>
        <h1>Finish brand logo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eius
          optio necessitatibus dolores hic consequuntur reiciendis quis nam modi
          laborum molestiae dignissimos ullam cum, natus assumenda recusandae.
        </p>
      </div>

      <div className={style.footer}>
        <span>
          <BsIcons.BsCalendar2Check /> <p>24 Mar - 15 Apr</p>
        </span>
        <div className={style.icons}>
          <HiIcons.HiPencil id={style.icon}/>
          <MdIcons.MdDelete id={style.icon}/>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
