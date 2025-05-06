import React from "react";

import { Form, message } from "antd";
import request from "../../tools/request";
import { useTheme } from "../provider/AntD";
import { useNavigate } from "react-router-dom";
const { Text, TextArea, Submit } = Form;
export default function Add() {
  const { setLoading } = useTheme();

  const navigate = useNavigate();
  function onFinish(values) {
    setLoading(true);
    request("/posts", { data: values })
      .then((response) => {
        if (response.status === 200) {
          message.success("مقاله اضافه شد");
          navigate("/posts");
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
    <>
      <Form layout="vertical" onFinish={onFinish} className="d-flex flex-col">
        <Text label="موضوع" name="title" />
        <TextArea label="توضیحات" name="description" rows={5} />
        <Submit />
      </Form>
    </>
  );
}
