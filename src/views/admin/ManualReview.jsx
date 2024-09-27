import React from "react";
import { List, Avatar, Button } from "antd";

const ManualReview = () => {
  const reviews = [
    { id: 1, customer: "John Doe", prescription: "Strong", status: "Pending" },
    {
      id: 2,
      customer: "Jane Smith",
      prescription: "Moderate",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6">
        Manual Review
      </h2>
      <List
        itemLayout="horizontal"
        dataSource={reviews}
        renderItem={(item) => (
          <List.Item
            className="bg-white rounded-lg p-4 mb-4 shadow-lg"
            actions={[
              <Button
                type="primary"
                key="approve"
                className="bg-green-500 border-none hover:bg-green-600"
              >
                Approve
              </Button>,
              <Button
                key="reject"
                className="bg-red-500 border-none hover:bg-red-600"
              >
                Reject
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
              title={`Customer: ${item.customer}`}
              description={`Prescription: ${item.prescription} | Status: ${item.status}`}
              className="text-gray-700"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ManualReview;
