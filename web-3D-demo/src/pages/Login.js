import React from 'react'
import { Form, Input, Button, Checkbox, Card ,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setToken } from '../utils/auth';
import {useNavigate} from "react-router-dom";
import {loginApi} from "../services/auth";


function Login(props) {
    const navigate = useNavigate();

    const onFinish = values => {
        if (values) {
            // setToken(values.username)
            // console.log('登录信息 = ', values);
            // navigate('/')

            loginApi({
                userName: values.username,
                password: values.password
            }).then(res => {
                if (res.code === 1) {
                    message.success('登录成功')
                    setToken(res.data.token)
                    navigate('/home')
                } else {
                    message.info(res.msg)
                }
            }).catch(err => {
                message.error('用户不存在');
            })
        }

    };

    return (
        <Card title='QinGaoTi admin SYS' className="login-form">
            <Form
                name="normal_login"

                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login
