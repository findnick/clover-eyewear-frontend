import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, deleteItem } from '../../../../redux/questionnaireSlice';

const Questionnaires = () => {
    const dispatch = useDispatch();
    const questionnaires = useSelector((state) => state.questionnaires.items);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingQuestionnaire, setEditingQuestionnaire] = useState(null);

    const handleAdd = () => {
        setEditingQuestionnaire(null);
        setIsModalVisible(true);
    };

    const handleEdit = (questionnaire) => {
        setEditingQuestionnaire(questionnaire);
        setIsModalVisible(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    const handleSubmit = (values) => {
        if (editingQuestionnaire) {
            dispatch(updateItem({ ...editingQuestionnaire, ...values }));
        } else {
            dispatch(addItem({ id: Date.now(), ...values }));
        }
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={handleAdd} className="mb-4">
                Add Questionnaire
            </Button>
            <Table dataSource={questionnaires} rowKey="id">
                <Table.Column title="Question" dataIndex="question" key="question" />
                <Table.Column title="Category" dataIndex="category" key="category" />
                <Table.Column
                    title="Actions"
                    key="actions"
                    render={(_, questionnaire) => (
                        <>
                            <Button onClick={() => handleEdit(questionnaire)}>Edit</Button>
                            <Button danger onClick={() => handleDelete(questionnaire.id)} className="ml-2">
                                Delete
                            </Button>
                        </>
                    )}
                />
            </Table>
            <Modal
                title={editingQuestionnaire ? 'Edit Questionnaire' : 'Add Questionnaire'}
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <Form
                    initialValues={editingQuestionnaire || { question: '', category: '' }}
                    onFinish={handleSubmit}
                >
                    <Form.Item name="question" label="Question" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="category" label="Category" rules={[{ required: true }]}>
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

export default Questionnaires;
