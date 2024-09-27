import React, { useState } from "react";
import { Button, Checkbox, Form, InputNumber, Radio } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PrescriptionForm = () => {
  const [sightType, setSightType] = useState("myopia");
  const [sphere, setSphere] = useState(["", ""]);
  const [cylinder, setCylinder] = useState(["", ""]);
  const [axis, setAxis] = useState(["", ""]);
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 1100,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="border rounded-lg p-3"
    >
      <Form.Item name="sight_type" className="helloworld">
        <Radio.Group
          onChange={(e) => setSightType(e.target.value)}
          value={sightType}
        >
          <div className="flex flex-row">
            <Radio value="myopia">Myopia</Radio>
            <Radio value="hyperopia">Hyperopia</Radio>
            <Radio value="presbyopia">Presbyopia</Radio>
          </div>
        </Radio.Group>
      </Form.Item>
      <div className="flex flex-col gap-4 p-5">
        <div className="text-xl font-medium">Sphere Values:</div>
        <div className="flex flex-row gap-3">
          <Form.Item
            label="OD"
            name="sphere_od"
            rules={[
              {
                required: true,
                message: "Please enter this field.",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="OS"
            name="sphere_os"
            rules={[
              {
                required: true,
                message: "Please enter this field.",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div className="text-xl font-medium">Cylinder Values:</div>
        <div className="flex flex-row gap-3">
          <Form.Item
            label="OD"
            name="cylinder_od"
            rules={[
              {
                required: true,
                message: "Please enter this field.",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="OS"
            name="cylinder_os"
            rules={[
              {
                required: true,
                message: "Please enter this field.",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div className="text-xl font-medium">Axis Values:</div>
        <div className="flex flex-row gap-3">
          <Form.Item
            label="OD"
            name="axis_od"
            rules={[
              {
                required: true,
                message: "Please enter this field.",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="OS"
            name="axis_os"
            rules={[
              {
                required: true,
                message: "Please enter this field.",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div className="text-xl font-medium">Pupillary Distance:</div>
        <Form.Item
          name="pupil_distance"
          label="Combined"
          rules={[
            {
              required: true,
              message: "Please enter this field.",
            },
          ]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </div>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{}} className="mx-5">
        <Button type="primary" htmlType="submit" className="self-center" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default PrescriptionForm;
