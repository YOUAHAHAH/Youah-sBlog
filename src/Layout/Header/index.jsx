import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Grid, Button } from "@arco-design/web-react";
import HeaderRight from "./components/HeaderRight";
import HeaderMenu from "./components/HeaderMenu";
import h from "../index.module.less";

const Header = Layout.Header;
const Row = Grid.Row;
const Col = Grid.Col;

const userName = "YOUAH";

export default function index() {
  const navigate = useNavigate();

  return (
    <Header className={h.arcoLayoutHeader}>
      <Row className={h.Row}>
        <Col lg={4} xl={4} className={h.arcoColOne}>
          <Button
            type="text"
            className={h.user}
            onClick={() => {
              navigate("/");
            }}
          >
            {userName}
          </Button>
        </Col>
        <Col lg={14} xl={14} className={h.arcoColTwo}>
          <HeaderMenu />
        </Col>
        <Col lg={6} xl={6} className={h.arcoColThree}>
          <HeaderRight />
        </Col>
      </Row>
    </Header>
  );
}
