/*
 * @Author: Chunwei Lu
 * @Date: 2022-07-01 21:45:17
 * @LastEditTime: 2022-07-02 22:30:48
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/pages/flow/index.tsx
 */
import Image from "next/image";
import React from "react";
import { Fragment } from "react";
import classes from "./index.module.css";
const FlowLayout = () => {
  const flowContainer = React.useRef(null);
  const cartContainer = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const [scale, setScale] = React.useState(1);
  const caluScale = React.useCallback(() => {
    if (!flowContainer.current || !show) return;
    const w = flowContainer.current.parentElement.offsetWidth;
    const scale = (w - 200) / w;
    flowContainer.current.style.transform = `scale(${scale})`;
  }, [show, flowContainer]);
  const handleClick = () => {
    const w = flowContainer.current.parentElement.offsetWidth;
    const scale = show ? 1 : (w - 200) / w;
    flowContainer.current.style.transform = `scale(${scale})`;
    cartContainer.current.style.transform = `translateX(${show ? "200px" : 0})`;
    setShow(!show);
  };
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      caluScale();
    });
  }, [caluScale]);
  return (
    <Fragment>
      <button style={{ float: "right", width: 100 }} onClick={handleClick}>
        {show ? "Hide" : "Show"} Cart
      </button>
      <div style={{ width: "100%", position: "relative", overflow: "hidden" }}>
        <div ref={flowContainer} className={classes.flowContainer}>
          {Array.from({ length: 10 }).map((item, index) => (
            <div className={classes.flowItem} key={index}>
              <div className={classes.flowItemCover}>
                <img src="/images/fallback.webp" />
              </div>
              <div className={classes.flowItemContent}>
                <div className={classes.flowItemTitle}>Title - {index}</div>
                <div className={classes.flowItemDesc}>SubTitle</div>
                <div className={classes.flowItemDesc}>Description</div>
                <div className={classes.flowItemDesc}>MoreInfo</div>
              </div>
            </div>
          ))}
          {Array.from({ length: 8 }).map((item, index) => (
            <div className={classes.flowItemHidden} key={index}></div>
          ))}
        </div>
        <div ref={cartContainer} className={classes.cartContainer}>
          {Array.from({ length: 8 }).map((item, index) => (
            <div className={classes.cartItem} key={index}>
              <div className="cartTitle">Asset - {index}</div>
              <div className="cartDesc">Price 1 ETH, USD: 1000$</div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default FlowLayout;
