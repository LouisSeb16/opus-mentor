import React from 'react'
import style from "@/styles/layout/dashboard/index.module.scss";
import * as VsIcons from "react-icons/vsc";
import * as HiIcons from "react-icons/hi2";

const DashboardHeader = () => {
  return (
    <div className={style.dashHeader}>
      <div><VsIcons.VscBell /></div>
      <div><HiIcons.HiOutlineUser/></div>
    </div>
  )
}

export default DashboardHeader