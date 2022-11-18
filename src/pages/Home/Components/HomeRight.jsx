import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Pagination } from "@arco-design/web-react";
import {
  IconCalendar,
  IconClockCircle,
  IconTag,
} from "@arco-design/web-react/icon";
import QueueAnim from "rc-queue-anim";
import h from "./less/HomeComponents.module.less";
import bg from "../../../assets/img/bg1.jpg";

export default function HomeRight() {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    total: 100,
    current: 1,
  });

  return (
    <div className={h.right}>
      <QueueAnim type={["right", "left"]} className="demo-content">
        <Card
          key="a"
          className={h.cardStyleRight}
          bordered={false}
          hoverable
          onClick={() => {
            navigate("/Article");
          }}
        >
          <div className={h.arcoCardBody}>
            <div className={h.arcoCardCover}>
              <img src={bg} />
            </div>
            <div className={h.arcoCardContent}>
              <h2>ArcoDesign</h2>
              <div className={h.arcoCardDate}>
                <span>
                  <IconCalendar />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconClockCircle />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconTag />
                  标签
                </span>
              </div>
              <Typography.Paragraph
                ellipsis={{
                  rows: 2,
                  wrapper: "span",
                }}
              >
                " A design is a plan or specification for the construction of an
                object or system or for the implementation of an activity or
                process.";
              </Typography.Paragraph>
            </div>
          </div>
        </Card>
        <Card key="b" className={h.cardStyleRight} bordered={false} hoverable>
          <div className={h.arcoCardBody}>
            <div className={h.arcoCardCover}>
              <img src={bg} />
            </div>
            <div className={h.arcoCardContent}>
              <h2>ArcoDesign</h2>
              <div className={h.arcoCardDate}>
                <span>
                  <IconCalendar />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconClockCircle />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconTag />
                  标签
                </span>
              </div>
              <Typography.Paragraph
                ellipsis={{
                  rows: 2,
                  wrapper: "span",
                }}
              >
                " A design is a plan or specification for the construction of an
                object or system or for the implementation of an activity or
                process.";
              </Typography.Paragraph>
            </div>
          </div>
        </Card>
        <Card key="c" className={h.cardStyleRight} bordered={false} hoverable>
          <div className={h.arcoCardBody}>
            <div className={h.arcoCardCover}>
              <img src={bg} />
            </div>
            <div className={h.arcoCardContent}>
              <h2>ArcoDesign</h2>
              <div className={h.arcoCardDate}>
                <span>
                  <IconCalendar />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconClockCircle />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconTag />
                  标签
                </span>
              </div>
              <Typography.Paragraph
                ellipsis={{
                  rows: 2,
                  wrapper: "span",
                }}
              >
                " A design is a plan or specification for the construction of an
                object or system or for the implementation of an activity or
                process.";
              </Typography.Paragraph>
            </div>
          </div>
        </Card>
        <Card key="d" className={h.cardStyleRight} bordered={false} hoverable>
          <div className={h.arcoCardBody}>
            <div className={h.arcoCardCover}>
              <img src={bg} />
            </div>
            <div className={h.arcoCardContent}>
              <h2>ArcoDesign</h2>
              <div className={h.arcoCardDate}>
                <span>
                  <IconCalendar />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconClockCircle />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconTag />
                  标签
                </span>
              </div>
              <Typography.Paragraph
                ellipsis={{
                  rows: 2,
                  wrapper: "span",
                }}
              >
                " A design is a plan or specification for the construction of an
                object or system or for the implementation of an activity or
                process.";
              </Typography.Paragraph>
            </div>
          </div>
        </Card>
        <Card key="e" className={h.cardStyleRight} bordered={false} hoverable>
          <div className={h.arcoCardBody}>
            <div className={h.arcoCardCover}>
              <img src={bg} />
            </div>
            <div className={h.arcoCardContent}>
              <h2>ArcoDesign</h2>
              <div className={h.arcoCardDate}>
                <span>
                  <IconCalendar />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconClockCircle />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconTag />
                  标签
                </span>
              </div>
              <Typography.Paragraph
                ellipsis={{
                  rows: 2,
                  wrapper: "span",
                }}
              >
                " A design is a plan or specification for the construction of an
                object or system or for the implementation of an activity or
                process.";
              </Typography.Paragraph>
            </div>
          </div>
        </Card>
        <Card key="f" className={h.cardStyleRight} bordered={false} hoverable>
          <div className={h.arcoCardBody}>
            <div className={h.arcoCardCover}>
              <img src={bg} />
            </div>
            <div className={h.arcoCardContent}>
              <h2>ArcoDesign</h2>
              <div className={h.arcoCardDate}>
                <span>
                  <IconCalendar />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconClockCircle />
                  发布于：123
                </span>
                <span>|</span>
                <span>
                  <IconTag />
                  标签
                </span>
              </div>
              <Typography.Paragraph
                ellipsis={{
                  rows: 2,
                  wrapper: "span",
                }}
              >
                " A design is a plan or specification for the construction of an
                object or system or for the implementation of an activity or
                process.";
              </Typography.Paragraph>
            </div>
          </div>
        </Card>
      </QueueAnim>
      <div className={h.footer}>
        <Pagination
          simple
          pageSizeChangeResetCurrent={false} // pageSize 改变的时候重置当前页码为 1
          sizeCanChange={false} // 是否可以改变每页条数
          total={pagination.total} // 数据总数
          current={pagination.current} // 当前页
          pageSize={6} // 每页数据条数
          size="small" // 分页器尺寸
          style={{ textAlign: "center", width: "100%" }}
          onChange={(pageNumber, pageSize) => {
            console.log(pageNumber, pageSize); // 变化时的回调
          }}
        />
      </div>
    </div>
  );
}
