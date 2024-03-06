import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';

import NavPage1 from './pages/NavPage1';
import NavPage2 from './pages/NavPage2';
import NavPage3 from './pages/NavPage3';
import Sidebar from './Sidebar';

const { Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Router>
      <Layout>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              height: '100vh',
            }}
          >
            <Routes>
              <Route path="/nav1" element={<NavPage1 />} />
              <Route path="/nav2" element={<NavPage2 />} />
              <Route path="/nav3" element={<NavPage3 />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;
