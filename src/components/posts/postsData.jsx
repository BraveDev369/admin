import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import request from "../../tools/request";
import { message } from "../../ui";

export function getData(setPeople, setLoading) {
  setLoading(true);
  request
    .get("/posts/")
    .then(({ data }) => {
      setPeople(data);
    })
    .catch(() => {
      message.error("مشکلی در دریافت اطلاعات پیش آمد.");
    })
    .finally(() => {
      setLoading(false);
    });
}

export function getColumns(setPeople, setLoading) {
  return [
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
}
