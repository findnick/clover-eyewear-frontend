import React, { useState } from 'react';
import { Form, Input, Button, Select, Typography, Layout, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import '../../assets/css/login.css'; // Custom CSS for additional styling

const { Title } = Typography;
const { Option } = Select;
const { Content } = Layout;

export const Auth = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        // Mock API call
        setTimeout(() => {
            setLoading(false);
            message.success(`Welcome ${values.username || values.email}!`);
        }, 1000);
    };

    return (
        <Layout className="login-layout">
            <Content className="login-content">
                <div className="login-container">
                    <Title level={2} className="login-title">Admin Login</Title>
                    <Form
                        name="login_form"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your username or email!' },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Username or Email"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your Password!' },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            name="adminType"
                            rules={[
                                { required: true, message: 'Please select your admin type!' },
                            ]}
                        >
                            <Select
                                placeholder="Select Admin Type"
                                size="large"
                            >
                                <Option value="us-admin">US Admin</Option>
                                <Option value="us-staff">US Staff</Option>
                                <Option value="us-lab-partner">US Lab Partner</Option>
                                <Option value="chinese-admin">Chinese Admin</Option>
                                <Option value="chinese-staff">Chinese Staff</Option>
                                <Option value="chinese-supplier">Chinese Supplier</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                size="large"
                                loading={loading}
                                block
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
};
