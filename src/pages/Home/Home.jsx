import React, { useEffect, useState } from "react";
import BannerAnim from "rc-banner-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
import "./Home.less";

const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;

export default function Home() {
  const imgArray = [
    "https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg",
    "https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg",
  ];

  const [intShow, setIntShow] = useState(0);
  const [prevEnter, setPrevEnter] = useState(false);
  const [nextEnter, setNextEnter] = useState(false);
  const [thumbEnter, setThumbEnter] = useState(false);

  const onChange = (type, int) => {
    if (type === "before") {
      setIntShow(int);
    }
  };

  const getNextPrevNumber = () => {
    let nextInt = intShow + 1;
    let prevInt = intShow - 1;
    if (nextInt >= imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = imgArray.length - 1;
    }
    return [prevInt, nextInt];
  };

  const prevEnterOne = () => {
    setPrevEnter(true);
  };

  const prevLeave = () => {
    setPrevEnter(false);
  };

  const nextEnterOne = () => {
    setNextEnter(true);
  };

  const nextLeave = () => {
    setNextEnter(false);
  };

  const onMouseEnter = () => {
    setThumbEnter(true);
  };

  const onMouseLeave = () => {
    setThumbEnter(false);
  };

  const intArray = getNextPrevNumber();
  const thumbChildren = imgArray.map((img, i) => (
    <span key={i}>
      <i style={{ backgroundImage: `url(${img})` }} />
    </span>
  ));

  return (
    <>
      <BannerAnim
        onChange={onChange}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        prefixCls="custom-arrow-thumb"
      >
        <Element key="aaa" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${imgArray[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            Ant Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element key="bbb" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${imgArray[1]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            Ant Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Arrow
          arrowType="prev"
          key="prev"
          prefixCls="user-arrow"
          component={TweenOne}
          onMouseEnter={prevEnterOne}
          onMouseLeave={prevLeave}
          animation={{ left: prevEnter ? 0 : -120 }}
        >
          <div className="arrow"></div>
          <TweenOneGroup
            enter={{ opacity: 0, type: "from" }}
            leave={{ opacity: 0 }}
            appear={false}
            className="img-wrapper"
            component="ul"
          >
            <li
              style={{ backgroundImage: `url(${imgArray[intArray[0]]})` }}
              key={intArray[0]}
            />
          </TweenOneGroup>
        </Arrow>
        <Arrow
          arrowType="next"
          key="next"
          prefixCls="user-arrow"
          component={TweenOne}
          onMouseEnter={nextEnterOne}
          onMouseLeave={nextLeave}
          animation={{ right: nextEnter ? 0 : -120 }}
        >
          <div className="arrow"></div>
          <TweenOneGroup
            enter={{ opacity: 0, type: "from" }}
            leave={{ opacity: 0 }}
            appear={false}
            className="img-wrapper"
            component="ul"
          >
            <li
              style={{ backgroundImage: `url(${imgArray[intArray[1]]})` }}
              key={intArray[1]}
            />
          </TweenOneGroup>
        </Arrow>
        <Thumb
          prefixCls="user-thumb"
          key="thumb"
          component={TweenOne}
          animation={{ bottom: thumbEnter ? 0 : -70 }}
        >
          {thumbChildren}
        </Thumb>
      </BannerAnim>
    </>
  );
}
