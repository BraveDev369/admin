import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import request from "../../tools/request";
import { Table, App as AntApp } from "../../ui";
import { Link } from "react-router-dom";
import Remove from "./Remove";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { setPeaple } from "../../redux/actions/people";

const columns = [
  { title: "شماره", key: "id" },
  { title: "نام", key: "name" },
  {
    title: "آدرس",
    key: "address",
    render: (f, r) => `${f.city} - ${f.street} - ${r.phone}`,
  },
  {
    key: "action",
    render: (_, r) => (
      <>
        <Link to={`/people/${r.id}`}>
          <EyeOutlined style={{ marginLeft: "8px" }} />
        </Link>
        <Link to={`/people/edite/${r.id}`}>
          <EditOutlined style={{ marginLeft: "8px" }} />
        </Link>
        <Remove id={r.id} />
      </>
    ),
  },
];
function List({ setData, person }) {
  const [loading, setLoading] = useState(false);
  const { message } = AntApp.useApp();

  useEffect(() => {
    request
      .get("/users/")
      .then(({ data }) => {
        setData(data);
      })
      .catch(() => {
        message.error("مشکلی در دریافت اطلاعات پیش آمد.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <Table columns={columns} data={person} loading={loading} />;
}

function mapStateToProps(state) {
  return {
    person: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setData: (data) => dispatch(setPeaple(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
