import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    UserOutlined,
    FileDoneOutlined,
    MedicineBoxOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

export const Dashboard = () => {
    return (
        <Layout className="min-h-screen">
            <Sider className="bg-blue-900">
                <div className="logo bg-white mx-4 my-6 p-4 rounded-md shadow-lg" />
                <Menu theme="dark" mode="inline" className="bg-blue-900">
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to="" className="text-white">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FileDoneOutlined />}>
                        <Link to="order-processing" className="text-white">Order Processing</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<MedicineBoxOutlined />}>
                        <Link to="manual-review" className="text-white">Manual Review</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="bg-white shadow-md p-0">
                    <h2 className="text-2xl font-bold ml-6 mt-4 text-blue-800">Chinese Admin Dashboard</h2>
                </Header>
                <Content className="m-4 p-6 bg-gray-100 rounded-lg shadow-md">
                    <Breadcrumb className="mb-4 text-blue-800">
                        <Breadcrumb.Item>Chinese Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
