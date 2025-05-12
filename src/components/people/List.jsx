import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "../../ui";
import Remove from "./Remove";

import { getPeople } from "../../redux/actions/people";

const columns = [
  { title: "شماره", key: "id" },
  { title: "نام", key: "username" },
  // {
  //   title: "آدرس",
  //   key: "address",
  //   render: (f, r) => `${f?.city} - ${f?.street} - ${r?.phone}`,
  // },
  { title: "ایمیل", key: "email" },
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

function List({ getItems, people, loading, person }) {
  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      {person.id && <div>آخرین بازدید : {person.name}</div>}
      <Table columns={columns} data={people} loading={loading} />
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
    getItems: () => dispatch(getPeople()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
