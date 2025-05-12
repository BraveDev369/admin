import React from "react";

import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import request from "../../tools/request";
const { Text, TextArea, Submit } = Form;
export default function Add() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const posts = useSelector((state) => state.posts);
  const id = 200;
  const navigate = useNavigate();
  function onFinish(values) {
    request.put(`/posts/`, { data: values }).then(console.log("first"));
  }
  return (
    <>
      <Form layout="vertical" onFinish={onFinish} className="d-flex flex-col">
        <Text label="موضوع" name="title" />
        <TextArea label="توضیحات" name="body" rows={5} />
        <Submit />
      </Form>
    </>
  );
}
