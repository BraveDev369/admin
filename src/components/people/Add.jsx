import {
  CheckCircleOutlined,
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Form, App as AntApp } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { genders } from "../../tools/constans";
import request from "../../tools/request";
import { addPerson } from "../../redux/actions/people";
import { useDispatch, useSelector } from "react-redux";

const { Text, Email, Password, Select, Checkbox, Submit, DatePicker } = Form;

export default function Add() {
  const { message } = AntApp.useApp();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const idForAdd = useSelector((state) => state.people.length);

  useEffect(() => {
    message.success("خوش اومدی جون دل");
  }, []);
  async function onFinish(values) {
    values.id = idForAdd + 1;

    try {
      await dispatch(addPerson(values));
      navigate("/people");
      message.success("کاربر اضافه شد");
    } catch (err) {
      message.error("خطا در بروزرسانی");
    }
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
