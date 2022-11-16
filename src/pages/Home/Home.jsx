import React, { useEffect } from "react";
import Banner from "./Components/Banner";
import HomeLeft from "./Components/HomeLeft";
import HomeRight from "./Components/HomeRight";
import h from "./Home.module.less";

export default function Home() {
  return (
    <>
      <Banner />
      <div className={h.layout}>
        <HomeLeft />
        <HomeRight />
      </div>
    </>
  );
}
