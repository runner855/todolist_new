import React from 'react';

import { Layout, Menu, theme } from 'antd';
import { FaUserCircle } from 'react-icons/fa';
import { PagesArray } from '../../Utilities/Utility'
import "../NavBar/NavBar.css";

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
              key: index,
             
              label: item.label,
            }),
          )}

         
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
        <div className='avatar container'><FaUserCircle/></div>

        </Header>
      </Layout>
    </Layout>
   );
}
 
