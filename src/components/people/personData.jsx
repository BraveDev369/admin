import { Link } from "react-router-dom";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { message } from "../../ui";
import request from "../../tools/request";
import Remove from "./Remove";

import { connect } from "react-redux";
import { setPeaple } from "../../redux/actions/post";

function getData(setPeople, setLoading, { setData, person }) {
  setLoading(true);
  
}



export function getColumns(setPeople, setLoading) {
  return 
}
