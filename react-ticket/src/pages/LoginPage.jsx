import { SaveOutlined, TrademarkOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, InputNumber, Row, Col } from 'antd';
import Typography from 'antd/es/typography/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserStorage } from '../helper/getUserStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  useHideMenu(TrademarkOutlined);
  const [user] = useState(getUserStorage());

  const onFinish = ({ name, desktop }) => {
    localStorage.setItem('agent', name);
    localStorage.setItem('desktop', desktop);
    navigate('/desktop');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (user.agent && user.desktop) {
      navigate('/desktop');
    }
  }, []);

  return (
    <div className="login-container">
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'center',
            background: 'rgba(255,255,255,0.9)',
            padding: 30,
          }}
        >
          <Title level={2}>Register your desktop</Title>
          <Text>Enter your name and your table number.</Text>
          <Divider />
          <Form
            layout="vertical"
            name="basic"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              background: 'rgba(255,255,255,0.9)',
              padding: 15,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Desktop"
              name="desktop"
              rules={[
                {
                  required: true,
                  message: 'Please input your desktop number!',
                },
              ]}
            >
              <InputNumber min={0} max={99} />
            </Form.Item>

            <div style={{ width: '100%' }}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  icon={<SaveOutlined />}
                >
                  Enter
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
