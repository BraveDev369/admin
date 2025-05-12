import {
  DeleteOutlined,
  LoadingOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { removePost } from "../../redux/actions/post";
import request from "../../tools/request";
import { App as AntApp, Popconfirm } from "../../ui";

export default function Remove({ id }) {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { message } = AntApp.useApp();
  function confirm() {
    setLoading(true);
    request
      .delete(`/posts/${id}`)
      .then(() => {
        dispatch(removePost(id));
        message.success("مقاله حذف شد");
      })
      .catch(() => {
        message.error("عملیات با شکست مواجه شد !!!");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function cancel(e) {
    message.error("عملیات لغو شد");
  }

  return (
    <>
      <Popconfirm
        placement="topRight"
        description=" آیا میخواهید حذف شود؟"
        okText="بله"
        cancelText="نه"
        onConfirm={confirm}
        onCancel={cancel}
        icon={
          <QuestionCircleOutlined
            style={{ alignSelf: "center", color: "red" }}
          />
        }
      >
        {loading ? (
          <LoadingOutlined />
        ) : (
          <DeleteOutlined style={{ color: "red" }} />
        )}
      </Popconfirm>
    </>
  );
}
