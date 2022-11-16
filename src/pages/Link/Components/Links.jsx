import React from "react";
import { Typography, Card, Link } from "@arco-design/web-react";
import { IconRobotAdd } from "@arco-design/web-react/icon";
import l from "../Link.module.less";
import bg from "../../../assets/img/bg.jpg";

const { Title } = Typography;

export default function Links() {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography>
        <Title heading={2}>
          <IconRobotAdd />
          <span>友情链接</span>
        </Title>
      </Typography>
      <div className={l.cardList}>
        <Card className={l.card} bordered={false}>
          <div className={l.cardContent}>
            <img src={bg} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "-50px",
              }}
            >
              <p>YOUAH</p>
              <span>12312312</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
