import React from "react";
import Timeline from "./Components/Timeline";
import c from "./Classify.module.less";

export default function Classify() {
  return (
    <div className={c.classify}>
      <Timeline />
    </div>
  );
}
