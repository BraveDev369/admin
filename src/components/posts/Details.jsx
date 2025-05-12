import { Button, Divider, Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../../redux/actions/post";

export default function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const loading = useSelector((state) => state.postLoading);

  useEffect(() => {
    dispatch(getPost(id));
  }, []);

  if (loading) {
    return <Spin fullscreen />;
  }
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
