import React from "react";
import * as echarts from "echarts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import ReactECharts from "echarts-for-react";
import { Card, Timeline, Grid } from "@arco-design/web-react";
import c from "../Classify.module.less";
import optionPieChart from "./Echarts";

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);

const TimelineItem = Timeline.Item;
const { Row } = Grid;

const imageStyle = {
  margin: "0 12px 12px 12px",
};

const TimeLineList = [
  {
    label: "2012-08",
    src: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png",
    content1: "Toutiao",
    content2: "Founded in 2012",
  },
  {
    label: "2017-05",
    src: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png",
    content1: "Xigua Video",
    content2: " Founded in 2017",
  },
  {
    label: "2018-07",
    src: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/73a34d47f2885cf5182d755aa0c8a7d4.png~tplv-uwbnlip3yd-png.png",
    content1: "Pipidance",
    content2: "Founded in 2018",
  },
];

export default function Category() {
  return (
    <div className={c.category}>
      <Card className={c.categoryCard} bordered={false}>
        <div className={c.card}>
          <Timeline mode="left" labelPosition="relative" reverse={true}>
            {TimeLineList.map((item) => {
              return (
                <TimelineItem
                  key={item.label}
                  label={item.label}
                  dotType="hollow"
                >
                  <Row style={{ display: "inline-flex", alignItems: "center" }}>
                    <img width="40" style={imageStyle} src={item.src} />
                    <div style={{ marginBottom: 12 }}>
                      {item.content1}
                      <div style={{ fontSize: 12, color: "#4E5969" }}>
                        {item.content2}
                      </div>
                    </div>
                  </Row>
                </TimelineItem>
              );
            })}
          </Timeline>
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
