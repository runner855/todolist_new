import React from 'react';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export const NavBar = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return ( 
    <div>NavBar</div>
   );
}
 
