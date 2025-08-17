import React from "react";
import  { useState, useEffect } from "react";
import { Form, Input, Select, Checkbox, Button, Progress, message } from "antd";
import { Helmet } from "react-helmet-async";

const { Option } = Select;

const steps = [
  "Application Submitted",
  "Documents Verified",
  "Interview Scheduled",
  "Approved / Rejected",
];

const Application = () => {
  // Form state
  const [form] = Form.useForm();
  const [completedSteps, setCompletedSteps] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedForm = localStorage.getItem("applicationForm");
    const savedSteps = localStorage.getItem("applicationSteps");

    if (savedForm) {
      form.setFieldsValue(JSON.parse(savedForm));
    }
    if (savedSteps) {
      setCompletedSteps(JSON.parse(savedSteps));
    }
  }, [form]);

  // Handle form submit
  const handleFinish = (values) => {
    localStorage.setItem("applicationForm", JSON.stringify(values));
    message.success("Form saved successfully!");
  };

  // Handle steps change
  const onStepChange = (checkedValues) => {
    setCompletedSteps(checkedValues);
    localStorage.setItem("applicationSteps", JSON.stringify(checkedValues));
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
        <Helmet>
            <title>Application</title>
        </Helmet>
      <h1 className="text-2xl font-bold mb-4 text-center">My Application</h1>

      {/* Form */}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="mb-6"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Passport Number"
          name="passport"
          rules={[{ required: true, message: "Please enter passport number" }]}
        >
          <Input placeholder="Enter passport number" />
        </Form.Item>

        <Form.Item
          label="Visa Type"
          name="visaType"
          rules={[{ required: true, message: "Please select visa type" }]}
        >
          <Select placeholder="Select visa type">
            <Option value="Tourist">Tourist</Option>
            <Option value="Student">Student</Option>
            <Option value="Work">Work</Option>
            <Option value="Business">Business</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Save Application
          </Button>
        </Form.Item>
      </Form>

      {/* Application Steps */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Application Steps</h2>
        <Checkbox.Group
          options={steps}
          value={completedSteps}
          onChange={onStepChange}
        />
      </div>

      {/* Progress */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Progress</h2>
        <Progress
          percent={Math.round((completedSteps.length / steps.length) * 100)}
          status="active"
        />
      </div>
    </div>
  );
};

export default Application;
