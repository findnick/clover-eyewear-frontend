import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    CheckCircleOutlined,
    AppstoreOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const ChineseStaff = () => {
    return (
        <Layout className="min-h-screen">
            <Sider className="bg-green-900">
                <div className="logo bg-white mx-4 my-6 p-4 rounded-md shadow-lg" />
                <Menu theme="dark" mode="inline" className="bg-green-900">
                    <Menu.Item key="1" icon={<TeamOutlined />}>
                        <Link to="" className="text-white">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<CheckCircleOutlined />}>
                        <Link to="task-list" className="text-white">Task List</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AppstoreOutlined />}>
                        <Link to="inventory-management" className="text-white">Inventory Management</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="bg-white shadow-md p-0">
                    <h2 className="text-2xl font-bold ml-6 mt-4 text-green-800">Chinese Staff Dashboard</h2>
                </Header>
                <Content className="m-4 p-6 bg-gray-100 rounded-lg shadow-md">
                    <Breadcrumb className="mb-4 text-green-800">
                        <Breadcrumb.Item>Chinese Staff</Breadcrumb.Item>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default ChineseStaff;
