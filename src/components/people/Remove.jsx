import {
    DeleteOutlined,
    LoadingOutlined,
    QuestionCircleOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import request from "../../tools/request";
import { message, Popconfirm } from "../../ui";

export default function Remove({ id, getData }) {
  const [loading, setLoading] = useState(false);
  function confirm() {
    setLoading(true);
    request
      .delete(`/users/${id}`)
      .then(() => {
        message.success("کاربر حذف شد");
        getData();
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
