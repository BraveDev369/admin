import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setPeople, setPeopleLoading } from "../../redux/actions/people";
import request from "../../tools/request";
import { App as AntApp, Table } from "../../ui";
import Remove from "./Remove";

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

function List({ setData, people, loading, setLoading, person }) {
  const { message } = AntApp.useApp();

  useEffect(() => {
    setLoading(true);
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

  return (
    <>
      {person.id && <div>آخرین بازدید : {person.name}</div>}
      <Table columns={columns} data={people} loading={loading} />;
    </>
  );
}

function mapStateToProps(state) {
  return {
    people: state.people,
    loading: state.peopleLoading,
    person: state.person,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setData: (data) => dispatch(setPeople(data)),
    setLoading: (loading) => dispatch(setPeopleLoading(loading)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
