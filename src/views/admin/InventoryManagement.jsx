import React from "react";
import { Card, Col, Row } from "antd";

const InventoryManagement = () => {
  const inventoryItems = [
    { id: 1, name: "Lens A", stock: 120 },
    { id: 2, name: "Frame B", stock: 85 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">
        Inventory Management
      </h2>
      <Row gutter={16}>
        {inventoryItems.map((item) => (
          <Col span={8} key={item.id}>
            <Card title={item.name} bordered={false} className="mb-4 shadow-lg">
              <p className="text-gray-700">
                <strong>Stock:</strong> {item.stock} units
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default InventoryManagement;
