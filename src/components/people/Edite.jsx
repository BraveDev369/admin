import {
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Divider, Form, Spin } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import usePerson from "../../hooks/usePerson";
import { setPeopleLoading, updatePerson } from "../../redux/actions/people";
import { genders } from "../../tools/constans";
import request from "../../tools/request";
import { useState } from "react";
import { useDispatch } from "react-redux";

const { Text, Email, Password, Select, Checkbox, Submit, DatePicker } = Form;

export default function Edite() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { person, perLoading } = usePerson(id);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function onFinish(values) {
    try {
      await dispatch(updatePerson(id, values));
      navigate(`/people/${id}`);
    } catch (err) {
      message.error("خطا در بروزرسانی");
    }
  }

  if (perLoading) {
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
        <Submit loading={loading} />
      </Form>
      <Divider />
      <Link to="/people">لیست کاربران</Link>
    </>
  );
}
