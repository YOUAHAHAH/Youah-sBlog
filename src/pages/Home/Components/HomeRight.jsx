import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Pagination, Message } from "@arco-design/web-react";
import {
  IconCalendar,
  IconClockCircle,
  IconTag,
} from "@arco-design/web-react/icon";
import QueueAnim from "rc-queue-anim";
import dayjs from "dayjs";
import h from "./less/HomeComponents.module.less";
import { HomePageList } from "../../../api/Home";

export default function HomeRight() {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    total: 0,
    current: 1,
    pageSize: 4,
  });
  const [pageList, setPageList] = useState([]);

  const getHomePageList = async (paginationData) => {
    const res = await HomePageList(paginationData);
    const { code, data, msg, total, current, pageSize } = res;
    if (code === 200) {
      setPageList([...data]);
      setPagination({ total, current, pageSize });
    } else {
      Message.error(msg);
    }
  };

  useEffect(() => {
    getHomePageList(pagination);
  }, []);

  return (
    <div className={h.right}>
      <QueueAnim type={["right", "left"]} className="demo-content">
        {pageList.map((item) => {
          return (
            <Card
              key={item.id}
              className={h.cardStyleRight}
              bordered={false}
              hoverable
              onClick={() => {
                navigate("/Article");
              }}
            >
              <div className={h.arcoCardBody}>
                <div className={h.arcoCardCover}>
                  <img src={item.PicUrl} />
                </div>
                <div className={h.arcoCardContent}>
                  <h2>{item.content}</h2>
                  <div className={h.arcoCardDate}>
                    <span>
                      <IconCalendar />
                      发布于：{dayjs(item.date).format("YYYY-MM-DD HH:mm:ss")}
                    </span>
                    <span>|</span>
                    <span>
                      <IconClockCircle />
                      更新于：
                      {dayjs(item.change_date).format("YYYY-MM-DD HH:mm:ss")}
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
                    {item.content}
                  </Typography.Paragraph>
                </div>
              </div>
            </Card>
          );
        })}
      </QueueAnim>
      <div className={h.footer}>
        <Pagination
          simple
          pageSizeChangeResetCurrent={false} // pageSize 改变的时候重置当前页码为 1
          sizeCanChange={false} // 是否可以改变每页条数
          total={pagination.total} // 数据总数
          current={pagination.current} // 当前页
          pageSize={pagination.pageSize} // 每页数据条数
          size="small" // 分页器尺寸
          style={{ textAlign: "center", width: "100%" }}
          onChange={(pageNumber, pageSize) => {
            getHomePageList({ current: pageNumber, pageSize }); // 变化时的回调
          }}
        />
      </div>
    </div>
  );
}
