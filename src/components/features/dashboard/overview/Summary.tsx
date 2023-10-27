import React from "react";
import style from "@/styles/dashboard/overview/index.module.scss";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";

const Summary = (props: any) => {
  const {
    store: { overViewData },
    actions: {},
  } = props;

  return (
    <div className={style.summarySection}>
      <div className="row">
        <div className="col-md-3" id={style.col}>
          <div className={style.card} id={style.first}>
            <img src="/images/dashboard/liquid.png" alt="" id={style.img} />
            <div id={style.span}>
              <BsIcons.BsFillPassFill />
            </div>
            <div>
              <h1>{overViewData.upComing}</h1>
              <p>Upcoming Projects</p>
            </div>
          </div>
        </div>
        <div className="col-md-3" id={style.col}>
          <div className={style.card} id={style.second}>
            <img src="/images/dashboard/liquid.png" alt="" id={style.img} />
            <div id={style.span}>
              <BsIcons.BsFillStopwatchFill />
            </div>
            <div>
              <h1>{overViewData.progress}</h1>
              <p>In process Projects</p>
            </div>
          </div>
        </div>
        <div className="col-md-3" id={style.col}>
          <div className={style.card} id={style.third}>
            <img src="/images/dashboard/liquid.png" alt="" id={style.img} />
            <div id={style.span}>
              <BsIcons.BsFillPatchCheckFill />
            </div>
            <div>
              <h1>{overViewData.done}</h1>
              <p>Completed Projects</p>
            </div>
          </div>
        </div>
        <div className="col-md-3" id={style.col}>
          <div className={style.card} id={style.fourth}>
            <img src="/images/dashboard/liquid.png" alt="" id={style.img} />
            <div id={style.span}>
              <BiIcons.BiTaskX />
            </div>
            <div>
              <h1>{overViewData.expired}</h1>
              <p>Expired Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
