import { UiContext } from '../context/uiContext';
import { useContext } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from 'react-router-dom';

//Ant
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

//pages
import CreateTicketPage from './CreateTicketPage';
import QuequePage from './QuequePage';
import DesktopPage from './DesktopPage';
import LoginPage from './LoginPage';

const RouterPage = () => {
  const { Sider, Content } = Layout;
  const { hidenMenu } = useContext(UiContext);

  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sider
          hidden={hidenMenu}
          collapsedWidth="50"
          breakpoint="md"
          collapsible
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to="/login">Login</Link>,
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: <Link to="/queque">Queque</Link>,
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: <Link to="/create">Create Ticket</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Content>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create" element={<CreateTicketPage />} />
              <Route path="/queque" element={<QuequePage />} />
              <Route path="/desktop" element={<DesktopPage />} />
              {/* redirect */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default RouterPage;
