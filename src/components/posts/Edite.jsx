import { Divider, Form, App as AntApp } from "antd";

import React, { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../redux/actions/post";
import request from "../../tools/request";
const { TextArea, Submit } = Form;

export default function Edite() {
  const { id } = useParams();
  const { message } = AntApp.useApp();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const post = useSelector((state) => state.post);

  useEffect(() => {
    request(`/posts/${id}`).then(({ data }) => dispatch(setPost(data)));
  }, [id]);

  function onFinish(values) {
    values.id = id;
    values.userId = post.userId;
    request
      .put(`/posts/${id}`, { data: values })
      .then(() => {
        navigate(`/posts/${id}`);
      })
      .catch((error) => {
        console.log(error);
        message.error("ارتباط ناموفق");
      })
      .finally(() => console.log("first"));
  }
  return (
    <>
      <Form
        layout="vertical"
        style={{ maxWidth: 600, flexDirection: "column" }}
        theme="light"
        onFinish={onFinish}
        fields={[
          {
            name: "title",
            value: post.title,
          },
          {
            name: "body",
            value: post.body,
          },
        ]}
      >
        <TextArea label={"موضوع"} name={"title"} />
        <TextArea label={"متن مقاله"} name={"body"} />
        <Submit />
      </Form>
      <Divider />
      <Link to={"/posts"}>لیست مقالات</Link>
    </>
  );
}
