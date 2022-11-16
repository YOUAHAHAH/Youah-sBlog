import React from "react";
import { Card, Statistic, Tag } from "@arco-design/web-react";
import { IconBulb, IconTag } from "@arco-design/web-react/icon";
import QueueAnim from "rc-queue-anim";
import h from "./less/HomeComponents.module.less";
import bg from "../../../assets/img/bg1.jpg";

const COLORS = [
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray",
];

export default function HomeLeft() {
  return (
    <div className={h.left}>
      <QueueAnim type={["left", "right"]} className="demo-content">
        <Card
          key="aa"
          className={h.cardStyleLeft}
          bordered={false}
          hoverable
          cover={
            <div className={h.arcoCardCover}>
              <img src={bg} />
            </div>
          }
        >
          <div className={h.arcoCardBody}>
            <p>YOUAH</p>
            <h4>少年不应该被世俗所牵挂!</h4>
            <div className={h.userPage}>
              <div>
                <span>文章</span>
                <Statistic value={50} countUp />
              </div>
              <div>
                <span>标签</span>
                <Statistic value={50} countUp />
              </div>
              <div>
                <span>分类</span>
                <Statistic value={50} countUp />
              </div>
            </div>
          </div>
        </Card>
        <Card key="bb" className={h.arcoBulb} bordered={false} hoverable>
          <div>
            <IconBulb />
            公告
          </div>
          <div>Welcome to YOUAH's Blog</div>
        </Card>
        <Card key="cc" className={h.arcoTag} bordered={false} hoverable>
          <div style={{ marginBottom: "10px" }}>
            <IconTag />
            标签
          </div>
          {COLORS.map((color, i) => (
            <Tag key={i} color={color} bordered={false}>
              {color}
            </Tag>
          ))}
        </Card>
      </QueueAnim>
    </div>
  );
}
