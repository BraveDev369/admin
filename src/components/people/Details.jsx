import { Button, Descriptions, Divider, App as AntApp, Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import usePerson from "../../hooks/usePerson";

export default function Details() {
  const { id } = useParams();
  const { items, perLoading } = usePerson(id);

  if (perLoading) {
    return <Spin fullscreen />;
  }

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
