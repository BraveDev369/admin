import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts, setPosts } from "../../redux/actions/post";
import { App as AntApp, Table } from "../../ui";
import Remove from "./Remove";

const columns = [
  { title: "شماره", key: "id" },
  { title: "موضوع", key: "title" },
  {
    key: "action",
    render: (_, r) => (
      <>
        <Link to={`/posts/${r.id}`}>
          <EyeOutlined />
        </Link>
        <Link to={`/posts/edite/${r.id}`}>
          <EditOutlined style={{ margin: "8px" }} />
        </Link>
        <Remove id={r.id} />
      </>
    ),
  },
];
function List({ getItems, posts }) {
  const { message } = AntApp.useApp();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    getItems();
  }, []);

  return (
    <>
      <Table columns={columns} data={posts} loading={loading} />;
    </>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getPosts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
