import { Layout } from "antd";

const { Header: AntHeader } = Layout;

import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "../../provider/AntD";

export default function Header() {
  const { toggleTheme, isDark } = useTheme();
  return (
    <AntHeader style={{ backgroundColor: `${isDark ? "black" : "white"}` }}>
      <div className="flex justify-between items-center w-full">
        <h2>پنل مدیریت</h2>
        <a onClick={toggleTheme}>
          {isDark ? <MoonOutlined /> : <SunOutlined />}
        </a>
      </div>
    </AntHeader>
  );
}
