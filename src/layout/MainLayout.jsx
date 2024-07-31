import { useState } from "react";
import { Layout } from "antd";
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";
import AppFooter from "./Footer";

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sidebar isOpen={collapsed} />
      <Layout>
        <AppHeader isOpen={collapsed} setOpen={setCollapsed} />
        {children}
        <AppFooter />
      </Layout>
    </Layout>
  );
};
export default MainLayout;
