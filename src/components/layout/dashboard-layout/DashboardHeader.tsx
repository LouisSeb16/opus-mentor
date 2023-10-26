import React, { useState } from "react";
import style from "@/styles/layout/dashboard/index.module.scss";
import * as VsIcons from "react-icons/vsc";
import * as HiIcons from "react-icons/hi2";
import { motion } from "framer-motion";

const DashboardHeader = (props: any) => {
  const {
    store: { userData, isLoggedIn },
    action: { push, signOut },
  } = props;

  console.log(userData);

  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    if (dropdown) {
      setDropdown(false);
      // document.body.style.overflow = "unset";
    } else {
      setDropdown(true);
      // document.body.style.overflow = "hidden";
    }
  };

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const listTwo = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className={style.dashHeader}>
      <div id={style.div}>
        <VsIcons.VscBell />
      </div>
      {isLoggedIn && (
        <div id={style.profileDiv}>
          <div className={style.profile}>
            <div onClick={handleDropdown}>
              <img src={`${userData.photoURL}`} alt="Profile image" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ type: "linear" }}
            variants={listTwo}
            className={`nav flex-column ${style.dropdown} ${
              dropdown ? style.show : style.hide
            }`}
          >
            <div id={style.header}>
              <h1>ACCOUNT</h1>
              <div id={style.user}>
                <img src={`${userData.photoURL}`} alt="Profile image" />
                <div>
                  <h3>{userData?.displayName}</h3>
                  <p>{userData?.email}</p>
                </div>
              </div>
            </div>
            <button onClick={signOut}>Log out</button>
          </motion.div>
        </div>
      )}
      {!isLoggedIn && (
        <div id={style.div}>
          <HiIcons.HiOutlineUser />
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
