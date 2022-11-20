import React from "react";
import {
  Typography,
  Card,
  Comment,
  Button,
  Input,
  Divider,
} from "@arco-design/web-react";
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
      <Divider className={l.line} />
      <Comment
        align="right"
        actions={
          <Button type="primary" long>
            发送
          </Button>
        }
        avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
        content={
          <div>
            <Input.TextArea
              placeholder="文明评论，友善发言"
              maxLength={{ length: 50, errorOnly: true }}
              showWordLimit
              allowClear
            />
          </div>
        }
      ></Comment>
    </div>
  );
}
