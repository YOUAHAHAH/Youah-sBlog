import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton, Message } from "@arco-design/web-react";
import BannerAnim from "rc-banner-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
import "./less/banner.less";
import b from "./../Home.module.less";
import bg from "../../../assets/img/bg.jpg";
import bg1 from "../../../assets/img/bg1.jpg";
import { HomeBanner } from "../../../api/Home";

const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;

export default function Home() {
  const navigate = useNavigate();
  const [intShow, setIntShow] = useState(0);
  const [prevEnter, setPrevEnter] = useState(false);
  const [nextEnter, setNextEnter] = useState(false);
  const [thumbEnter, setThumbEnter] = useState(false);
  const [imgArray, setImgArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const Banner = async () => {
    const res = await HomeBanner();
    const { code, msg, data } = res;
    if (code === 200) {
      setImgArray([...data]);
      setLoading(false);
    } else {
      Message.error(msg);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      Banner();
    }, 500);
  }, []);

  // type：before after
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

  // 左右两边
  const intArray = getNextPrevNumber();
  // 底部图片列表
  const thumbChildren = imgArray.map((img, i) => (
    <span key={i}>
      <i style={{ backgroundImage: `url(${img.PicUrl})` }} />
    </span>
  ));

  return (
    <>
      <Skeleton
        loading={loading}
        text={false}
        className={b.skeleton}
        image={{
          style: {
            width: "100%",
            height: 600,
            borderRadius: "10px",
          },
        }}
        animation
      >
        <BannerAnim
          onChange={onChange}
          onMouseEnter={() => {
            setThumbEnter(true);
          }}
          onMouseLeave={() => {
            setThumbEnter(false);
          }}
          prefixCls="custom-arrow-thumb"
        >
          {/* 图片 */}
          {imgArray.map((item, index) => {
            return (
              <Element key={"a" + index} prefixCls="banner-user-elem">
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    backgroundImage: `url(${item.PicUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/Article/" + item.id);
                  }}
                />
              </Element>
            );
          })}
          {/* 左边 */}
          {imgArray.map((item, index) => {
            return (
              <Arrow
                arrowType="prev"
                key={"prev" + index}
                prefixCls="user-arrow"
                component={TweenOne}
                onMouseEnter={() => {
                  setPrevEnter(true);
                }}
                onMouseLeave={() => {
                  setPrevEnter(false);
                }}
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
                    style={{
                      backgroundImage: `url(${imgArray[intArray[0]].PicUrl})`,
                    }}
                    key={item}
                  />
                </TweenOneGroup>
              </Arrow>
            );
          })}
          {/* 右边 */}
          {imgArray.map((item, index) => {
            return (
              <Arrow
                arrowType="next"
                key={"next" + index}
                prefixCls="user-arrow"
                component={TweenOne}
                onMouseEnter={() => {
                  setNextEnter(true);
                }}
                onMouseLeave={() => {
                  setNextEnter(false);
                }}
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
                    style={{
                      backgroundImage: `url(${imgArray[intArray[1]].PicUrl})`,
                    }}
                    key={item}
                  />
                </TweenOneGroup>
              </Arrow>
            );
          })}
          {/* 底部 */}
          <Thumb
            prefixCls="user-thumb"
            key="thumb"
            component={TweenOne}
            animation={{ bottom: thumbEnter ? 0 : -100 }}
          >
            {thumbChildren}
          </Thumb>
        </BannerAnim>
      </Skeleton>
    </>
  );
}
