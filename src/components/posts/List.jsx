import { EyeOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import request from "../../tools/request";
import { Table, App as AntApp } from "../../ui";
import { setPosts } from "../../redux/actions/post";

const columns = [
  { title: "شماره", key: "id" },
  { title: "موضوع", key: "title" },
  {
    key: "action",
    render: (_, r) => (
      <>
        <Link to={`/posts/${r.id}`}>
          <EyeOutlined style={{ marginLeft: "8px" }} />
        </Link>
      </>
    ),
  },
];

function List({ setItems, posts }) {
  const { message } = AntApp.useApp();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    request("/posts/")
      .then(({ data }) => {
        setItems(data);
        message.success("اطلاعات با موفقیت دریافت شد");
      })
      .finally(() => setLoading(false));
  }, []);

  return <Table columns={columns} data={posts} loading={loading} />;
}

function mapStateToProps(state) {
  return {
    posts: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setItems: (data) => dispatch(setPosts(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
