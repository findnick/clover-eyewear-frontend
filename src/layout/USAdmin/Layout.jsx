import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  FileTextOutlined,
  DollarOutlined,
  OrderedListOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

const { Sider } = Layout;

const USAdminSidebar = () => {
  return (
    <Sider className="bg-blue-900 min-h-screen">
      <div className="logo bg-white mx-4 my-6 p-4 rounded-md shadow-lg" />
      <Menu theme="dark" mode="inline" className="bg-blue-900">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="admin-list" className="text-white">
            Admins
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
          <Link to="inventory" className="text-white">
            Inventory
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FileTextOutlined />}>
          <Link to="questionnaire-management" className="text-white">
            Questionnaires
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          <Link to="analytics" className="text-white">
            Analytics
          </Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<DollarOutlined />}>
          <Link to="tax-revenues" className="text-white">
            Tax & Revenues
          </Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<OrderedListOutlined />}>
          <Link to="orders" className="text-white">
            Orders & Packaging
          </Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          <Link to="users" className="text-white">
            User Records
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default function USAdminLayout() {
  return (
    <div className="flex">
      <USAdminSidebar />
      <Outlet />
    </div>
  );
}
