import { useMemo } from "react";
import { Table as AntTable } from "antd";

export default function Table({ data, columns, rowKey = "id", ...props }) {
  const newCol = useMemo(() => {
    return columns.map((c) => ({ ...c, dataIndex: c.key }));
  }, [columns]);

  return (
    <AntTable dataSource={data} columns={newCol} rowKey={rowKey} {...props} />
  );
}
