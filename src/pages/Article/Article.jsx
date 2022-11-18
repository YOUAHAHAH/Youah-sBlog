import React from "react";
import { Card } from "@arco-design/web-react";
import a from "./Article.module.less";

export default function Article() {
  return (
    <div className={a.article}>
      <Card title="Arco Card" className={a.articleCard}>
        ByteDance's core product, Toutiao ('Headlines'), is a content platform
        in China and around the world. Toutiao started out as a news
        recommendation engine and gradually evolved into a platform delivering
        content in various formats.
      </Card>
    </div>
  );
}
