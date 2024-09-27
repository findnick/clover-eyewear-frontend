import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, deleteItem } from '../../../../redux/adminSlice';

const Admins = () => {
    const dispatch = useDispatch();
    const admins = useSelector((state) => state.admins.items);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingAdmin, setEditingAdmin] = useState(null);

    const handleAdd = () => {
        setEditingAdmin(null);
        setIsModalVisible(true);
    };

    const handleEdit = (admin) => {
        setEditingAdmin(admin);
        setIsModalVisible(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    const handleSubmit = (values) => {
        if (editingAdmin) {
            dispatch(updateItem({ ...editingAdmin, ...values }));
        } else {
            dispatch(addItem({ id: Date.now(), ...values }));
        }
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={handleAdd} className="mb-4">
                Add Admin
            </Button>
            <Table dataSource={admins} rowKey="id">
                <Table.Column title="Username" dataIndex="username" key="username" />
                <Table.Column title="Role" dataIndex="role" key="role" />
                <Table.Column title="Email" dataIndex="email" key="email" />
                <Table.Column
                    title="Actions"
                    key="actions"
                    render={(_, admin) => (
                        <>
                            <Button onClick={() => handleEdit(admin)}>Edit</Button>
                            <Button danger onClick={() => handleDelete(admin.id)} className="ml-2">
                                Delete
                            </Button>
                        </>
                    )}
                />
            </Table>
            <Modal
                title={editingAdmin ? 'Edit Admin' : 'Add Admin'}
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <Form
                    initialValues={editingAdmin || { username: '', role: '', email: '' }}
                    onFinish={handleSubmit}
                >
                    <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </Modal>
        </div>
    );
};

export default Admins;
