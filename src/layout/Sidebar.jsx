import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Row, Typography } from "antd";
import { companyName, logoUrl, routesConfig } from "../config/constants";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();

  const siderStyle = {
    minHeight: "100vh",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
  };

  const logoStyle = {
    height: "40px",
    width: "40px",
  };

  const onMenuClick = (e) => navigate(e.key);

  const items =
    routesConfig &&
    routesConfig.map((menu) => ({
      key: menu.path,
      icon: <UserOutlined />,
      label: menu.name,
    }));

  return (
    <Sider style={siderStyle} trigger={null} collapsible collapsed={isOpen}>
      <Row justify="center" align="middle" style={{ marginTop: "30px" }}>
        <img src={logoUrl} alt={companyName} style={logoStyle} />
        {!isOpen && (
          <Text level={5} style={{ color: "white", paddingLeft: "10px" }}>
            {companyName}
          </Text>
        )}
      </Row>
      <Menu theme="dark" mode="inline" items={items} onClick={onMenuClick} />
    </Sider>
  );
};

export default Sidebar;
