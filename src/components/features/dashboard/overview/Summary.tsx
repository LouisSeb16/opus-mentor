import React from "react";
import { taskSummary } from "./data";
import style from "@/styles/dashboard/overview/index.module.scss";

const Summary = () => {
  return (
    <div className={style.summarySection}>
      <div className="row">
        {taskSummary.map((data: any, index: any) => {
          return (
            <div className="col-md-3" key={index} id={style.col}>
              <div id={style.card}>
                <p>{data.title}</p>
                <hr />
                <h1>{data.data}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Summary;
