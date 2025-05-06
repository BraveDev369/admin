import {
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined
} from "@ant-design/icons";

import { Form, message, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { genders } from "../../tools/constans";
import request from "../../tools/request";
import { useTheme } from "../provider/AntD";
const { Text, Email, Password, Select, Checkbox, Submit, DatePicker } = Form;

export default function Edite() {
  const [person, setPerson] = useState({});
  const { id } = useParams();
  const { setLoading } = useTheme();

  const navigate = useNavigate();

  useEffect(() => {
    request(`users/${id}`).then(({ data }) => setPerson(data));
  }, []);

  function onFinish(values) {
    setLoading(true);
    request
      .put(`/users/${id}`, { data: values })
      .then(() => {
        navigate(`/people/${id}`);
      })
      .catch(() => {
        // message.error("ارتباط ناموفق");
      })
      .finally(() => setLoading(false));
  }

  if (!person.id) {
    return <Spin fullscreen />;
  }

  return (
    <>
      <h1>ویرایش {person.name}</h1>
      <Form
        layout="vertical"
        theme="light"
        onFinish={onFinish}
        initialValues={person}
      >
        <Text
          label="نام کاربری"
          name="username"
          placeholder="نام کاربری"
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
          isDigit
        />
        <Password
          label="رمز ورود"
          name="password"
          placeholder="رمز ورود"
          prefix={<KeyOutlined />}
          allowClear
          hasFeedback
        />
        <Email
          label="ایمیل"
          name="email"
          placeholder="example@gmail.com"
          prefix={<MailOutlined />}
          allowClear
        />
        <DatePicker label="تاریخ تولد" name="birthday" />
        <Text
          label="کدپستی"
          name="postCode"
          placeholder="کدپستی"
          prefix={<PhoneOutlined />}
          len={10}
          isDigit
        />
        <Select label="جنسیت" name="gender" options={genders} />
        <Checkbox label="مدیر" name="admin" />
        <Submit />
      </Form>
    </>
  );
}
