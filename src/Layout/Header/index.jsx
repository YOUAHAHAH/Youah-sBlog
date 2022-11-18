import React, { useState } from "react";
import { Layout, Grid, Modal, Button } from "@arco-design/web-react";
import HeaderRight from "./components/HeaderRight";
import HeaderMenu from "./components/HeaderMenu";
import h from "../index.module.less";

const Header = Layout.Header;
const Row = Grid.Row;
const Col = Grid.Col;

const userName = "YOUAH";

export default function index() {
  const [visible, setVisible] = useState(false);
  const [stepState, setStepState] = useState(false);

  const submitIntroStart = () => {
    setVisible(false);
    setStepState(true);
  };

  const changeState = (v) => {
    setStepState(v);
  };

  return (
    <Header className={h.arcoLayoutHeader} id="headerId">
      <Row className={h.Row}>
        <Col lg={4} xl={4} className={h.arcoColOne}>
          <Button
            type="text"
            className={h.user}
            onClick={() => setVisible(true)}
          >
            {userName}
          </Button>
        </Col>
        <Col lg={14} xl={14} className={h.arcoColTwo}>
          <HeaderMenu />
        </Col>
        <Col lg={6} xl={6} className={h.arcoColThree}>
          <HeaderRight stepState={stepState} changeState={changeState} />
        </Col>
      </Row>
      <Modal
        title="确认框"
        visible={visible}
        onOk={submitIntroStart}
        onCancel={() => setVisible(false)}
      >
        <p>确认开启指引吗?</p>
      </Modal>
    </Header>
  );
}
