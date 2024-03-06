import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import Sidebar from './Sidebar';

const { Sider } = Layout;

const Sidebar = (props) => {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {/* NavLink로 각 링크 설정 */}
        <Menu.Item key="1" icon={<UserOutlined />}>
          <NavLink to="/nav1">nav 1</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <NavLink to="/nav2">nav 2</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <NavLink to="/nav3">nav 3</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
