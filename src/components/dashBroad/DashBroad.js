import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingFilled,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import OrderListSeller from "./OrderListSeller";
import CouponSeller from "./couponTodo/CouponSeller";

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          style={{
            color: "white",
            padding: "5px 10px",
            fontSize: "3.5rem",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              color: "#FB570B",
            }}
          >
            電競
          </span>
          人
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "會員管理",
            },
            {
              key: "2",
              icon: <UnorderedListOutlined />,
              label: "訂單管理",
            },
            {
              key: "3",
              icon: <ShoppingFilled />,
              label: "商品管理",
            },
            {
              key: "4",
              icon: <ShoppingFilled />,
              label: "優惠券管理",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed
              ? MenuUnfoldOutlined
              : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            height: 900,
            background: colorBgContainer,
          }}
        >
          <OrderListSeller />
          {/* <CouponSeller /> */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
