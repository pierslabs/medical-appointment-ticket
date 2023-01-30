import { useState, useContext } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { SocketContext } from '../context/socketContext';
import { useHideMenu } from '../hooks/useHideMenu';

const CreateTicketPage = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState({});

  const { Title, Text } = Typography;

  const newTicket = () => {
    socket.emit('create-newTicket', null, (ticket) => {
      setTicket(ticket);
    });
  };

  return (
    <div className="create-ticket-page">
      <Col
        span={14}
        offset={6}
        align="center"
        style={{
          background:
            'linear-gradient(162deg, rgba(148,224,208,1) 0%, rgba(46,184,200,1) 47%, rgba(174,247,172,1) 100%)',
          padding: 10,
          marginTop: '10vh',
          border: 'solid 1px #aaa',
        }}
      >
        <Title style={{ margin: 20 }} level={3}>
          Press button for generate new ticket.
        </Title>

        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          onClick={newTicket}
          style={{ top: 25, zIndex: 1 }}
        ></Button>
      </Col>
      {ticket && (
        <Col
          span={14}
          offset={6}
          align="center"
          style={{
            background: 'white',
            padding: 15,
            paddingTop: 40,
            border: 'solid 1px #aaa',
          }}
        >
          <Text style={{ fontSize: 20 }}>Your number</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            {ticket.number}
          </Text>
        </Col>
      )}
    </div>
  );
};

export default CreateTicketPage;
