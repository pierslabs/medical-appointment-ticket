import { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../context/socketContext';
import { ArrowRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row } from 'antd';
import Typography from 'antd/es/typography/Typography';
import { useNavigate } from 'react-router-dom';
import { getUserStorage } from '../helper/getUserStorage';

const { Title, Text } = Typography;

const DesktopPage = () => {
  const navigate = useNavigate();
  const [user] = useState(getUserStorage());
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);

  const exit = () => {
    localStorage.clear();
    navigate('/');
  };

  const nextTicket = () => {
    console.log('nexticket');
    socket.emit('next-ticket', user, (ticket) => {
      setTicket(ticket);
    });
  };

  useEffect(() => {
    if (!user.agent || !user.desktop) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="desktop-page">
      <Row
        style={{ padding: 10, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
        align="center"
      >
        <Col xs={24} xl={6}>
          <Title level={2}>{user.agent}</Title>
          <Text>You are working at the table:</Text>
          <Text style={{ fontSize: 20, marginLeft: 10 }} type="success">
            {user.desktop}
          </Text>
        </Col>

        <Col xs={24} xl={6} align="right">
          <Button
            danger
            shape="round"
            onClick={exit}
            icon={<CloseCircleOutlined />}
          >
            Exit
          </Button>
        </Col>
      </Row>
      <Divider />

      <Row
        style={{
          padding: 10,
          border: 'solid 1px #aaa',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          width: '60vw',
          margin: 'auto',
        }}
        align="center"
      >
        <Col xs={22} xl={20} align="center">
          <Text style={{ fontSize: 20 }}>You are attending ticket number:</Text>
          <br />
          {ticket ? (
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket.number}
            </Text>
          ) : (
            <Text style={{ fontSize: 30, color: '#0366fc' }} type="primary">
              There are no customers waiting to be served.
            </Text>
          )}
        </Col>
        <Col xs={(22, { align: 'center' })} xl={3}>
          <Button
            type="primary"
            onClick={nextTicket}
            icon={<ArrowRightOutlined />}
            style={{ height: '100%', fontSize: 20 }}
          >
            Next ticket
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default DesktopPage;
