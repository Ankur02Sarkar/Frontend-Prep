import React, { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
    if (value >= 100) {
      onComplete();
    }
  }, [value]);
  return (
    <div
      style={{
        background: "#e2e2e2",
        color: "black",
        height: "23px",
        width: "300px",
        borderRadius: "25px",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          position: "absolute",
          width: "inherit",
          display: "flex",
          justifyContent: "center",
          zIndex: "2",
          alignItems: "center",
          color: percent > 49 ? "white" : "black",
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuenow={percent.toFixed()}
        aria-valuemax={100}
        style={{
          height: "100%",
          //   width: `${percent}%`,
          transform: `scaleX(${percent / 100})`,
          transformOrigin: "left",
          background: "#00c251",
        }}
      />
    </div>
  );
};

export default ProgressBar;
