"use client";
import React, { useRef, useEffect, useState } from "react";
import classes from "../style/scroll.module.scss";

const InfinityScroll = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  console.log(isVisible);

  return (
    <div>
      <div className={classes.figure}></div>
      <div ref={targetRef}></div>
      <div className={`${classes.cub} ${isVisible && classes.visible}`}></div>
      <div className={classes.figure}></div>
    </div>
  );
};

export default InfinityScroll;
