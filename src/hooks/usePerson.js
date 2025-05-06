import React, { useEffect, useMemo } from "react";
import { App as AntApp } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import request from "../tools/request";
import { setPerson } from "../redux/actions/people";

export default function usePerson(id) {
  const { message } = AntApp.useApp();

  const dispatch = useDispatch();

  const person = useSelector((state) => state.person);

  useEffect(() => {
    request(`/users/${id}`).then(({ data }) => dispatch(setPerson(data)));
  }, [id]);

  const items = useMemo(
    () => [
      {
        key: "name",
        label: "نام",
        children: person.name,
      },
      {
        key: "username",
        label: "نام‌کاربری",
        children: person.username || "نامشخص",
      },
      {
        key: "phoneNumber",
        label: "تلفن",
        children: person.phone || "نامشخص",
      },
      {
        key: "email",
        label: "ایمیل",
        children: person.email || "empty",
      },
      {
        key: "address",
        label: "آدرس",
        children: `${person.address?.street}, ${person?.address?.city}, ${person?.address?.zipcode}`,
      },
    ],
    [person]
  );

  return { items };
}
