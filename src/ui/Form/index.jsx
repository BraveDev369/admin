import {
  Form,
  Input,
  Button,
  DatePicker as AntDatePicker,
  Select as AntSelect,
  Checkbox as AntCheckbox,
} from "antd";
import React from "react";

import { digitsArToEn, digitsFaToEn } from "@persian-tools/persian-tools";

function Text({ label, name, required, len, min, max, isDigit, ...props }) {
  function normalize(value) {
    return digitsFaToEn(digitsArToEn(value)).replace(/\D/, "");
  }
  return (
    <>
      <Form.Item
        normalize={isDigit && normalize}
        label={label}
        name={name}
        rules={[{ required }, { len }, { min }]}
      >
        <Input {...props} maxLength={max} />
      </Form.Item>
    </>
  );
}

function Email({ label, name, required, len, min, max, ...props }) {
  return (
    <>
      <Form.Item
        label={label}
        name={name}
        rules={[{ required }, { len }, { min }, { type: "email" }]}
      >
        <Input {...props} maxLength={max} />
      </Form.Item>
    </>
  );
}

function Password({
  label,
  name,
  required,
  hasFeedback,
  len,
  min,
  max,
  ...props
}) {
  return (
    <>
      <Form.Item
        label={label}
        name={name}
        rules={[{ required }, { len }, { min }, { type: "password" }]}
        hasFeedback
      >
        <Input.Password {...props} maxLength={max} />
      </Form.Item>
    </>
  );
}

function Select({ label, name, required, options = [], ...props }) {
  return (
    <>
      <Form.Item name={name} label={label} rules={[{ required }]}>
        <AntSelect {...props} placeholder="انتخاب کنید">
          {options.map(({ value, label }) => (
            <AntSelect.Option key={value} value={value}>
              {label}
            </AntSelect.Option>
          ))}
        </AntSelect>
      </Form.Item>
    </>
  );
}

function Checkbox({ label, name }) {
  return (
    <>
      <Form.Item name={name} valuePropName="checked">
        <AntCheckbox>{label}</AntCheckbox>
      </Form.Item>
    </>
  );
}

function Submit({ label = "ثبت", ...props }) {
  return (
    <>
      <Form.Item>
        <Button {...props} type="primary" htmlType="submit">
          {label}
        </Button>
      </Form.Item>
    </>
  );
}

function DatePicker({ label, name, required, len, min, max, ...props }) {
  return (
    <>
      <Form.Item label={label} name={name} rules={[{ required }]}>
        <AntDatePicker {...props} maxLength={max} />
      </Form.Item>
    </>
  );
}

function TextArea({ label, name, row, ...props }) {
  console.log(label);
  return (
    <>
      <Form.Item label={label} name={name}>
        <Input.TextArea {...props} />
      </Form.Item>
    </>
  );
}

export default Object.assign(Form, {
  Text,
  Email,
  Submit,
  Select,
  Password,
  TextArea,
  Checkbox,
  DatePicker,
});
