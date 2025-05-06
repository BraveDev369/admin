import { Button, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import request from "../../tools/request";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../redux/actions/post";

export default function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const post = useSelector((state) => state.post);

  useEffect(() => {
    request(`/posts/${id}`).then(({ data }) => {
      dispatch(setPost(data));
    });
  }, [id]);

  return (
    <>
      <h2>موضوع :</h2>
      <h2>{post?.title}</h2>
      <h2>مقاله :</h2>
      <p>{post?.body}</p>
      <Divider />
      <Button color="cyan" variant="link">
        <Link to="/posts">صفحه مقالات</Link>
      </Button>
    </>
  );
}
