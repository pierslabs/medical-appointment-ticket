import { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../context/socketContext';

import { Card, Col, List, Row, Space, Tag } from 'antd';
import Typography from 'antd/es/typography/Typography';

import { useHideMenu } from '../hooks/useHideMenu';
import { getLatestTickets } from '../helper/getLatestTickets';

const { Title, Text } = Typography;

const QuequePage = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    socket.on('ticket-asigned', (assigneds) => {
      console.log('asignados');
      setTickets(assigneds);
    });

    return () => {
      socket.off('ticket-asigned');
    };
  }, [socket]);

  useEffect(() => {
    getLatestTickets().then(({ lastTickets }) => setTickets(lastTickets));
  }, []);

  return (
    <div className="queque-page">
      <Row style={{ minWidth: '40vw' }}>
        <Col span={10} align="center">
          <Text
            style={{
              fontSize: '35px',
              color: '#fff',
              textShadow:
                ' 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black',
            }}
          >
            Attending tickets
          </Text>
        </Col>
        <Col span={12} offset={2} align="center">
          <Text
            style={{
              fontSize: '35px',
              color: '#fff',
              textShadow:
                ' 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black',
            }}
          >
            Ticket History
          </Text>
        </Col>
      </Row>
      <hr />
      <Row style={{ minWidth: '40vw' }}>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{
                    minWidth: '40vw',
                    padding: '5px',
                    textAlign: 'center',
                  }}
                  actions={[
                    <Space key={item.name} size={[0, 2]} wrap>
                      <Tag color="volcano" style={{ fontSize: 15, padding: 5 }}>
                        Agent: {item.agent}
                      </Tag>
                      <Tag
                        style={{ fontSize: 15, padding: 5 }}
                        color="green-inverse"
                      >
                        Desktop: {item.desktop}
                      </Tag>
                    </Space>,
                  ]}
                >
                  <Title level={4}>Ticket Number: {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <List
            dataSource={tickets}
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              marginTop: '13px',
              minWidth: '40vw',
              padding: '5px',
              textAlign: 'center',
            }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket num. ${item.number}`}
                  description={
                    <>
                      <Space key={item.agent} size={[10, 2]} wrap>
                        <Text>Desktop:</Text>
                        <Tag color="processing">{item.desktop}</Tag>

                        <Text>Agent:</Text>
                        <Tag color="orange"> {item.agent}</Tag>
                      </Space>
                    </>
                  }
                ></List.Item.Meta>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default QuequePage;
