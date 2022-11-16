import React from "react";
import { Card, Divider } from "@arco-design/web-react";
import Links from "./Components/Links";
import Comments from "./Components/Comments";
import l from "./Link.module.less";

export default function Link() {
  return (
    <div className={l.link}>
      <Card className={l.linkCard} bordered={false}>
        <Links />
        <Divider className={l.line} />
        <Comments />
      </Card>
    </div>
  );
}
