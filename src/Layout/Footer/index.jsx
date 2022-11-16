import React from "react";
import { Layout, Typography, Link } from "@arco-design/web-react";
import h from "../index.module.less";

const { Paragraph } = Typography;
const Footer = Layout.Footer;

export default function index() {
  return (
    <Footer className={h.arcoLayoutFooter}>
      <Typography>
        <Paragraph>©2022 By YOUAHAHAH</Paragraph>
        <Paragraph>框架 springBoot | React 仿Butterfly</Paragraph>
        <Paragraph>
          备案号：
          <Link href="https://www.beianx.cn/search" target="_blank">
            赣ICP备2022001504号-1
          </Link>
        </Paragraph>
        <Paragraph>
          热情这东西其实也很脆弱,从来都只有好聚,我一直在等你，等死一样。
        </Paragraph>
      </Typography>
    </Footer>
  );
}
