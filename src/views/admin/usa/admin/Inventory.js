import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, deleteItem } from '../../../../redux/inventorySlice';

const Inventory = () => {
    const dispatch = useDispatch();
    const inventory = useSelector((state) => state.inventory.items);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const handleAdd = () => {
        setEditingItem(null);
        setIsModalVisible(true);
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setIsModalVisible(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    const handleSubmit = (values) => {
        if (editingItem) {
            dispatch(updateItem({ ...editingItem, ...values }));
        } else {
            dispatch(addItem({ id: Date.now(), ...values }));
        }
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={handleAdd} className="mb-4">
                Add Product
            </Button>
            <Table dataSource={inventory} rowKey="id">
                <Table.Column title="Name" dataIndex="name" key="name" />
                <Table.Column title="Category" dataIndex="category" key="category" />
                <Table.Column title="Price" dataIndex="price" key="price" />
                <Table.Column
                    title="Actions"
                    key="actions"
                    render={(_, item) => (
                        <>
                            <Button onClick={() => handleEdit(item)}>Edit</Button>
                            <Button danger onClick={() => handleDelete(item.id)} className="ml-2">
                                Delete
                            </Button>
                        </>
                    )}
                />
            </Table>
            <Modal
                title={editingItem ? 'Edit Product' : 'Add Product'}
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <Form
                    initialValues={editingItem || { name: '', category: '', price: '' }}
                    onFinish={handleSubmit}
                >
                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="price" label="Price" rules={[{ required: true, type: 'number' }]}>
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

export default Inventory;
