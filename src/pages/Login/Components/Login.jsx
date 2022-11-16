import React, { useCallback, useRef, useState } from "react";
import { Form, Input, Button, Link } from "@arco-design/web-react";
import {
  IconUser,
  IconLock,
  IconMessage,
  IconDoubleRight,
} from "@arco-design/web-react/icon";
import Captcha from "react-captcha-code";
import l from "../Login.module.less";

const FormItem = Form.Item;

const Login = () => {
  const [form] = Form.useForm();
  const captchaRef = useRef();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    captcha: "",
  });

  const handleChange = useCallback((captcha) => {
    setFormData({ captcha });
  }, []);

  const handleSubmit = (v) => {
    console.log(v);
  };

  return (
    <Form
      form={form}
      autoComplete="off"
      layout="vertical"
      style={{ marginTop: "20px" }}
      onSubmit={handleSubmit}
    >
      <FormItem
        field="username"
        rules={[{ required: true, message: "请输入账号" }]}
      >
        <Input
          placeholder="请输入账号"
          prefix={<IconUser />}
          allowClear={true}
          height="40px"
          autoComplete="off"
        />
      </FormItem>
      <FormItem
        field="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input.Password
          placeholder="请输入密码"
          prefix={<IconLock />}
          allowClear={true}
          height="40px"
          autoComplete="off"
        />
      </FormItem>
      <div style={{ display: "flex" }}>
        <FormItem
          field="captcha"
          rules={[
            {
              required: true,
              validator: (v, cb) => {
                if (!v) {
                  return cb("请输入验证码");
                } else if (formData.captcha.toLowerCase() !== v) {
                  return cb("验证码错误");
                }
                cb(null);
              },
            },
          ]}
        >
          <Input
            style={{ marginRight: "10px" }}
            placeholder="请输入验证码"
            prefix={<IconMessage />}
            allowClear={true}
            height="40px"
            autoComplete="off"
          />
        </FormItem>
        <Captcha ref={captchaRef} onChange={handleChange} charNum={4} />
      </div>
      <FormItem className={l.formItem}>
        <span>没有账号？</span>
        <Link style={{ color: "#165DFF" }} hoverable={false}>
          注册
        </Link>
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" long>
          登录
        </Button>
      </FormItem>
      <FormItem>
        <Link href="#" style={{ color: "#165DFF" }} hoverable={false}>
          暂不登录
          <IconDoubleRight />
        </Link>
      </FormItem>
    </Form>
  );
};

export default Login;
