import React from 'react';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { GrTasks } from 'react-icons/gr';
import { PagesArray } from '../../../.history/src/Constants/Utilities/Utility_20230319164655';

const { Header, Content, Footer, Sider } = Layout;

export const NavBar = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return ( 
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{height:1000}}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          items={PagesArray && PagesArray.map(
            (item, index) => ({
              key: String(index + 1),
              icon: GrTasks,
              label: item.label,
            }),
          )}

         
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        {/* <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>content</div>
        </Content> */}
      </Layout>
    </Layout>
   );
}
 
