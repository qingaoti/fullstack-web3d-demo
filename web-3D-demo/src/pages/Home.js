import { LaptopOutlined, NotificationOutlined, UserOutlined,DownOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu ,Dropdown ,Avatar ,Badge, message} from 'antd';
import React from 'react';
import logo from '../components/logo.png';
import { clearToken,isLogined } from "../utils/auth";
import {Navigate,useNavigate,Outlet} from "react-router-dom";
const { Header, Content, Sider } = Layout;

const Home = (props) => {
    const navigate = useNavigate();

    //导航数据
    const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const keyArr = [
            {
                label:'用户管理',
                children:[
                    {
                        path:'/home/admin',
                        label:'用户列表',
                        onClick: (p)=>{
                            // console.log("```p",p);
                            navigate(p.key);
                        }
                    }
                ]
            },
            {
                label:'web3D',
                children:[
                    {
                        path:'/home/web3d',
                        label:'3D仿真模拟',
                        onClick: (p)=>{
                            // console.log("```p",p);
                            navigate(p.key);
                        }
                    },
                    {
                        path:'/home/lingo3d',
                        label:'lingo3d',
                        onClick: (p)=>{
                            // console.log("```p",p);
                            navigate(p.key);
                        }
                    },
                    {
                        path:'/home/lingo3dDemo2',
                        label:'lingo3dDemo2',
                        onClick: (p)=>{
                            // console.log("```p",p);
                            navigate(p.key);
                        }
                    }
                ]
            },
            {
                label:'其他',
                children:[
                    {
                        path:'/home/about',
                        label:'关于我',
                        onClick: (p)=>{
                            // console.log("```p",p);
                            navigate(p.key);
                        }
                    }
                ]
            }
        ];

        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: keyArr[index].label,
            children: keyArr[index].children.map((_, j) => {
                return {
                    key: _.path,
                    label: `${_.label}`,
                    onClick: _.onClick
                };
            }),
        };
    });

    const popMenu = (
        <Menu
            onClick={(p) => {
                if (p.key === "logOut") {
                    clearToken();
                    navigate('/login')
                } else {
                    message.info(p.key); // tip
                    if ((p.key = "notice")) {
                        navigate('/home/admin/noticesv');// 跳转至通知中心
                    }
                }
            }}>
            <Menu.Item key='notice' >通知中心</Menu.Item>
            <Menu.Item key='setting'>设置</Menu.Item>
            <Menu.Item key='logOut' >退出</Menu.Item>
        </Menu>
    )

    return ( isLogined() ? (
        <Layout>
            <Header className="header">
                <div className="logo" >
                    <img src={logo} alt={logo}/>
                </div>
                <Dropdown overlay={popMenu}>
                    <div>
                        <Avatar size="small" icon={<UserOutlined />} />
                        <Badge dot={!props.isAllRead}><span style={{ color: '#fff', margin: '0 5px' }}>超级管理员</span></Badge>
                        <DownOutlined />
                    </div>
                </Dropdown>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
        ) : (<Navigate to='/login' />)
    );
}

export default Home;
