import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { AxiosError } from 'axios';
import { postInivation } from 'common/apis';

interface Props {
  onSuccess: () => void;
}

const validateMessages = {
  required: 'The input is required!',
  types: {
    email: 'The input is not a valid E-mail!',
  },
};

interface Values {
  name: string;
  email: string;
  confirmEmail: string;
}

const UserForm: React.FC<Props> = ({ onSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <Form
      form={form}
      name="invite"
      validateMessages={validateMessages}
      onFieldsChange={() => {
        if (error !== '') {
          setError('');
        }
      }}
      onFinish={async ({ name, email, confirmEmail }: Values) => {
        if (email !== confirmEmail) {
          form.setFields([
            {
              name: 'confirmEmail',
              errors: ['Confirm Email is not the same as Email!'],
            },
          ]);
          return;
        }
        setLoading(true);
        try {
          await postInivation({ name, email });
          onSuccess();
        } catch (error) {
          const { response, message } = error as AxiosError<{
            errorMessage: string;
          }>;
          setError(response ? response.data.errorMessage : message);
          setLoading(false);
        }
      }}
    >
      <Form.Item
        name="name"
        rules={[{ type: 'string', min: 3, required: true }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Full name" />
      </Form.Item>
      <Form.Item name="email" rules={[{ type: 'email', required: true }]}>
        <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="confirmEmail"
        rules={[{ type: 'email', required: true }]}
      >
        <Input
          prefix={<MailOutlined />}
          type="email"
          placeholder="Confirm email"
        />
      </Form.Item>
      <Form.Item validateStatus={error ? 'error' : 'success'} help={error}>
        <Button type="primary" htmlType="submit" block disabled={loading}>
          {loading ? 'Sending, please wait...' : 'Send'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
