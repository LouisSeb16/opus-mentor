import React from "react";
import { taskSummary } from "./data";
import style from "@/styles/dashboard/overview/index.module.scss";

const Summary = () => {
  const assignId: any = (param: number) => {
    if (param == 0) return `${style.first}`;
    if (param == 1) return `${style.second}`;
    if (param == 2) return `${style.third}`;
    if (param == 3) return `${style.fourth}`;
  };

  return (
    <div className={style.summarySection}>
      <div className="row">
        {taskSummary.map((data: any, index: any) => {
          return (
            <div className="col-md-3" key={index} id={style.col}>
              <div className={style.card} id={assignId(index)}>
                <img src="/images/dashboard/liquid.png" alt="" id={style.img} />
                <div id={style.span}>{data.icon}</div>
                <div>
                  <h1>{data.data}</h1>
                  <p>{data.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Summary;
