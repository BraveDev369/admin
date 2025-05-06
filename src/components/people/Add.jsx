import {
  CheckCircleOutlined,
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Form, App as AntApp } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { genders } from "../../tools/constans";
import request from "../../tools/request";
import { useTheme } from "../provider/AntD";

const { Text, Email, Password, Select, Checkbox, Submit, DatePicker } = Form;

export default function Add() {
  const { setLoading } = useTheme();
  const { message } = AntApp.useApp();

  const navigate = useNavigate();

  useEffect(() => {
    message.success("خوش اومدی جون دل");
  }, []);
  function onFinish(values) {
    setLoading(true);
    request("/users", { data: values })
      .then((response) => {
        if (response.status === 200) {
          message.success("کاربر اضافه شد");
          navigate("/people");
        }
      })
      .catch((error) => {
        if (error.status === 404) {
          message.error("ارتباط ناموفق");
        }
      })
      .finally(() => setLoading(false));
  }
  return (
    <div>
      <Form
        layout="vertical"
        style={{ maxWidth: 600 }}
        theme="light"
        onFinish={onFinish}
      >
        <Text
          label="نام کاربری"
          name="username"
          placeholder="نام کاربری"
          required={true}
          prefix={<UserOutlined />}
          max={8}
          min={5}
        />
        <Text
          label="شماره تلفن"
          name="phone"
          placeholder="*********۰۹"
          prefix={<PhoneOutlined />}
          len={11}
          max={11}
          required
          isDigit
        />
        <Password
          label="رمز ورود"
          name="password"
          placeholder="رمز ورود"
          prefix={<KeyOutlined />}
          allowClear
          required
          hasFeedback
        />
        <Email
          label="ایمیل"
          name="email"
          placeholder="example@gmail.com"
          prefix={<MailOutlined />}
          required
          allowClear
        />
        <DatePicker label="تاریخ تولد" name="birthday" required />
        <Text
          label="کدپستی"
          name="postCode"
          placeholder="کدپستی"
          prefix={<PhoneOutlined />}
          len={10}
          required
          isDigit
        />
        <Select label="جنسیت" name="gender" options={genders} required />
        <Checkbox label="مدیر" name="admin" />
        <Submit />
      </Form>
    </div>
  );
}
