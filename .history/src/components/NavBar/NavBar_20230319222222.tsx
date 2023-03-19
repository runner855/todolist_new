import React from 'react';

import { Layout, Menu, theme } from 'antd';
import { FaUserCircle } from 'react-icons/fa';
import { PagesArray } from '../../Utilities/Utility'
import "../NavBar/NavBar.css";
import { NavLink } from 'react-router-dom';

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
        {/* <Menu
          theme="dark"
          mode="inline"
          items={PagesArray && PagesArray.map(
            (item, index) => ({
              key: index,
             
              label:  item.label ? <NavLink   to={item.to}>{item.label}</NavLink> :
              <img  className="logo"src={item.image} alt="logo"/>
            })
          )}

         
        /> */}
      <Menu theme="dark" mode="inline">{PagesArray && PagesArray.map((item, index) => {
        return (
        <ul className='links_container'>
          <li className='item_link'>{item.label ? <NavLink to={item.to}>{item.label}</NavLink>: <div className='logo'><img  className="logo"src={item.image} alt="logo"/></div>}</li>
        </ul>
          
            
         
        )
      })}</Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
        <div className='avatar_container'>
          <ul className='user'>
            <li className='user_text'>User name</li>
            <li className='user_icon'><FaUserCircle/></li>

          </ul>
          </div>

        </Header>
      </Layout>
    </Layout>
   );
}
 
