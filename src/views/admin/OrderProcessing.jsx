import React from "react";
import { Card, Col, Row } from "antd";

const OrderProcessing = () => {
  const orders = [
    { id: 1, customer: "John Doe", product: "Glasses A", status: "Pending" },
    {
      id: 2,
      customer: "Jane Smith",
      product: "Glasses B",
      status: "Processing",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6">
        Order Processing
      </h2>
      <Row gutter={16}>
        {orders.map((order) => (
          <Col span={8} key={order.id}>
            <Card
              title={`Order #${order.id}`}
              bordered={false}
              className="mb-4 shadow-lg"
            >
              <p className="text-gray-700">
                <strong>Customer:</strong> {order.customer}
              </p>
              <p className="text-gray-700">
                <strong>Product:</strong> {order.product}
              </p>
              <p
                className={`text-sm font-semibold ${
                  order.status === "Pending"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                <strong>Status:</strong> {order.status}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OrderProcessing;
