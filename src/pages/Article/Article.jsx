import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@arco-design/web-react";
import a from "./Article.module.less";

export default function Article() {
  const params = useParams();

  useEffect(() => {}, []);
  return (
    <div className={a.article}>
      <Card className={a.articleCard}>{params.id}</Card>
    </div>
  );
}
