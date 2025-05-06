import { Button, Descriptions, Divider, App as AntApp } from "antd";
import { Link, useParams } from "react-router-dom";
import usePerson from "../../hooks/usePerson";

export default function Details() {
  const { id } = useParams();
  const { items } = usePerson(id);

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
