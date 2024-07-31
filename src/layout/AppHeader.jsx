import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";

const { Header } = Layout;

const AppHeader = ({ setOpen, isOpen }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Button
        type="text"
        icon={isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setOpen(!isOpen)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default AppHeader;
