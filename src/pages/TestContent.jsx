import { Layout, theme } from "antd";

const { Content } = Layout;

const TestContent = ({ name }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const contentStyle = {
    margin: "10px 10px",
    padding: 24,
    minHeight: "70vh",
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  };

  return <Content style={contentStyle}>{name}</Content>;
};

export default TestContent;
