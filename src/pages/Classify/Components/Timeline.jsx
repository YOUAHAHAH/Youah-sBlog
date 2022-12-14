import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import {
  Card,
  Timeline,
  Grid,
  Message,
  Pagination,
} from "@arco-design/web-react";
import dayjs from "dayjs";
import c from "../Classify.module.less";
import optionPieChart from "./Echarts";
import { HomePageList } from "../../../api/Home";

const TimelineItem = Timeline.Item;
const { Row } = Grid;

const imageStyle = {
  margin: "0 12px 12px 12px",
};

export default function Category() {
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
    <div className={c.category}>
      <Card className={c.categoryCard} bordered={false}>
        <div className={c.card}>
          <div className={c.pagination}>
            <Timeline mode="left" labelPosition="relative" reverse={true}>
              {pageList.map((item) => {
                return (
                  <TimelineItem
                    key={item.title}
                    label={dayjs(item.date).format("YYYY-MM-DD HH:mm:ss")}
                    dotType="hollow"
                  >
                    <Row
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <img width="40" style={imageStyle} src={item.PicUrl} />
                      <div style={{ marginBottom: 12 }}>
                        {item.title}
                        <div style={{ fontSize: 12, color: "#4E5969" }}>
                          {item.content}
                        </div>
                      </div>
                    </Row>
                  </TimelineItem>
                );
              })}
            </Timeline>
            <Pagination
              simple
              pageSizeChangeResetCurrent={false} // pageSize ???????????????????????????????????? 1
              sizeCanChange={false} // ??????????????????????????????
              total={pagination.total} // ????????????
              current={pagination.current} // ?????????
              pageSize={pagination.pageSize} // ??????????????????
              size="small" // ???????????????
              style={{ textAlign: "center", width: "100%" }}
              onChange={(pageNumber, pageSize) => {
                getHomePageList({ current: pageNumber, pageSize }); // ??????????????????
              }}
            />
          </div>
          <div className={c.pieChart}>
            <ReactECharts
              option={optionPieChart}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
