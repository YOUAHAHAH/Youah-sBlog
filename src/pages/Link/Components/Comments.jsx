import React, { useState } from "react";
import { Comment, Typography, Button, Input } from "@arco-design/web-react";
import {
  IconHeart,
  IconMessage,
  IconHeartFill,
} from "@arco-design/web-react/icon";
import l from "../Link.module.less";

export default function Comments() {
  const [likes, setLikes] = useState(0);
  const [com, setCom] = useState(false);

  const actions = (
    <>
      {likes ? (
        <span
          className="custom-comment-action"
          onClick={() => setLikes(likes - 1)}
        >
          <IconHeartFill style={{ color: "#f53f3f" }} /> {likes}
        </span>
      ) : (
        <span
          className="custom-comment-action"
          onClick={() => setLikes(likes + 1)}
        >
          <IconHeart /> {likes}
        </span>
      )}
      <span className="custom-comment-action" onClick={() => setCom(!com)}>
        <IconMessage /> 回复
      </span>
    </>
  );

  const mockText =
    " A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process.A design is a plan or specification for the construction of an object or system or for the implementation of an activity or processA design is a plan or specification for the construction of an object or system or for the implementation of an activity or processA design is a plan or specification for the construction of an object or system or for the implementation of an activity or processA design is a plan or specification for the construction of an object or system or for the implementation of an activity or processA design is a plan or specification for the construction of an object or system or for the implementation of an activity or process";

  return (
    <div className={l.comments}>
      <Comment
        actions={actions}
        align="right"
        author={"Socrates"}
        avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
        content={
          <Typography.Paragraph
            ellipsis={{
              rows: 2,
              expandable: true,
              wrapper: "span",
            }}
          >
            {mockText}
          </Typography.Paragraph>
        }
        datetime="1 hour"
      >
        {/* 评论 */}
        {com ? (
          <Comment
            align="right"
            actions={[
              <Button
                key="0"
                type="secondary"
                size="mini"
                onClick={() => setCom(false)}
              >
                取消
              </Button>,
              <Button key="1" type="primary" size="mini">
                回复
              </Button>,
            ]}
            avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
            content={
              <div>
                <Input.TextArea
                  maxLength={{ length: 120, errorOnly: true }}
                  showWordLimit
                  placeholder="Here is you content."
                />
              </div>
            }
          ></Comment>
        ) : null}
        <Comment
          actions={actions}
          align="right"
          author="Balzac"
          avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
          content={
            <Typography.Paragraph
              ellipsis={{
                rows: 2,
                expandable: true,
                wrapper: "span",
              }}
            >
              {mockText}
            </Typography.Paragraph>
          }
          datetime="1 hour"
        >
          {/* 评论 */}
          {com ? (
            <Comment
              align="right"
              actions={[
                <Button
                  key="0"
                  type="secondary"
                  size="mini"
                  onClick={() => setCom(false)}
                >
                  取消
                </Button>,
                <Button key="1" type="primary" size="mini">
                  回复
                </Button>,
              ]}
              avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
              content={
                <div>
                  <Input.TextArea
                    maxLength={{ length: 120, errorOnly: true }}
                    showWordLimit
                    placeholder="Here is you content."
                  />
                </div>
              }
            ></Comment>
          ) : null}
          <Comment
            actions={actions}
            align="right"
            author="Austen"
            avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp"
            content={
              <Typography.Paragraph
                ellipsis={{
                  rows: 2,
                  expandable: true,
                  wrapper: "span",
                }}
              >
                {mockText}
              </Typography.Paragraph>
            }
            datetime="1 hour"
          />
          {/* 评论 */}
          {com ? (
            <Comment
              align="right"
              actions={[
                <Button
                  key="0"
                  type="secondary"
                  size="mini"
                  onClick={() => setCom(false)}
                >
                  取消
                </Button>,
                <Button key="1" type="primary" size="mini">
                  回复
                </Button>,
              ]}
              avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
              content={
                <div>
                  <Input.TextArea
                    maxLength={{ length: 120, errorOnly: true }}
                    showWordLimit
                    placeholder="Here is you content."
                  />
                </div>
              }
            ></Comment>
          ) : null}
          <Comment
            actions={actions}
            align="right"
            author="Plato"
            avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            content={
              <Typography.Paragraph
                ellipsis={{
                  rows: 2,
                  expandable: true,
                  wrapper: "span",
                }}
              >
                {mockText}
              </Typography.Paragraph>
            }
            datetime="1 hour"
          />
          {/* 评论 */}
          {com ? (
            <Comment
              align="right"
              actions={[
                <Button
                  key="0"
                  type="secondary"
                  size="mini"
                  onClick={() => setCom(false)}
                >
                  取消
                </Button>,
                <Button key="1" type="primary" size="mini">
                  回复
                </Button>,
              ]}
              avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
              content={
                <div>
                  <Input.TextArea
                    maxLength={{ length: 120, errorOnly: true }}
                    showWordLimit
                    placeholder="Here is you content."
                  />
                </div>
              }
            ></Comment>
          ) : null}
        </Comment>
      </Comment>
    </div>
  );
}
