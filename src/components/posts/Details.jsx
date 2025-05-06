import { Button, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import request from "../../tools/request";
import { useTheme } from "../provider/AntD";

export default function Details() {
  const { id } = useParams();
  const [posts, setPosts] = useState({});

  const { isDark } = useTheme();

  useEffect(() => {
    request(`/posts/${id}`).then(({ data }) => setPosts(data));
  }, [id]);

  return (
    <>
      <h2 style={{ color: isDark ? "#fff" : "#000" }}>{posts.title}</h2>
      <p style={{ color: isDark ? "#ccc" : "#333" }}>{posts.body}</p>
      <Divider />
      <Button color="cyan" variant="link">
        <Link to="/posts">صفحه مقالات</Link>
      </Button>
    </>
  );
}
