import { Button, Descriptions, Divider, message } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import request from "../../tools/request";
import { EyeOutlined } from "@ant-design/icons";

export default function Details() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    request(`/users/${id}`).then(({ data }) => setUser(data));
  }, [id]);
  useEffect(() => {
    if (user.name) {
      message.info({
        content: user.name,
        icon: <EyeOutlined style={{ color: "green" }} />,
      });
    }
  }, [user]);
  const items = useMemo(
    () => [
      {
        key: "name",
        label: "نام",
        children: user?.name,
      },
      {
        key: "username",
        label: "نام‌کاربری",
        children: user?.username || "نامشخص",
      },
      {
        key: "phoneNumber",
        label: "تلفن",
        children: user?.phone || "نامشخص",
      },
      {
        key: "email",
        label: "ایمیل",
        children: user?.email || "empty",
      },
      {
        key: "address",
        label: "آدرس",
        children: `${user?.address?.street}, ${user?.address?.city}, ${user?.address?.zipcode}`,
      },
    ],
    [user]
  );

  return (
    <>
      <Descriptions title="اطلاعات کاربر" items={items} />
      <Divider />
      <Button color="cyan" variant="link">
        <Link to="/people">صفحه کاربران</Link>
      </Button>
    </>
  );
}
