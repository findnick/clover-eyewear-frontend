import React from "react";
import { List, Avatar, Button } from "antd";

const TaskList = () => {
  const tasks = [
    { id: 1, title: "Review new prescriptions", status: "Pending" },
    { id: 2, title: "Update inventory records", status: "In Progress" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">Task List</h2>
      <List
        itemLayout="horizontal"
        dataSource={tasks}
        renderItem={(item) => (
          <List.Item
            className="bg-white rounded-lg p-4 mb-4 shadow-lg"
            actions={[
              <Button
                type="primary"
                key="complete"
                className="bg-green-500 border-none hover:bg-green-600"
              >
                Mark as Complete
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src="https://via.placeholder.com/150"
                  className="shadow-md"
                />
              }
              title={item.title}
              description={`Status: ${item.status}`}
              className="text-gray-700"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TaskList;
