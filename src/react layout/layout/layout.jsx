import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  
} from '@ant-design/icons';
import { Link,Navigate,Outlet } from 'react-router-dom';
import { Button, Layout, Menu, theme,Avatar,Dropdown } from 'antd';
const { Header, Sider, Content } = Layout;
const App = () => {
  const navigate=useNavigate();
  const logoutUser =()=>{
    localStorage.removeItem('isAuth')
    navigate('/login')
  }
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Profile
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Settings
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <Link to='/login' onClick={logoutUser}>
          Logout
          </Link>
      ),
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
              {
                  
                  key: '1',
                  icon: <UserOutlined />,
                  
              label:<Link to={'stats'}> Stats</Link>,
            },
            {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: <Link to="user">User</Link>,
            },
            {
                key: '3',
                icon: <UploadOutlined />,
                label: <Link to= 'reports'>Reports</Link>,
            },
        ]}
        />
        
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display:"flex",
            justifyContent: "space-between",
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
          <h2>Connecting With Login Api</h2>
             <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"

        arrow
      >
         <Avatar
      style={{
        backgroundColor: '#87d068',
      }}
      icon={<UserOutlined />}
    />
      </Dropdown>
         
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          
        <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;