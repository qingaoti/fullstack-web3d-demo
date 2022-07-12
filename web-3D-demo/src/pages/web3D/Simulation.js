import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import {Steps, Descriptions, Image, Form, Input, InputNumber, Switch, Select, Button, message} from 'antd';
import React, {useEffect, useState} from 'react';
import web3dImg from '../../components/web3dmoxing.png';
import {dataApi} from "../../services/web3d";
const { Step } = Steps;



const App = () => {
    const [data,setDate] = useState({
        "ModelName": "xxxx模型",
        "Version": "3.0.0.1",
        "label": "Hangzhou, Zhejiang",
        "Remark":"empty",
        "PubTime": "2021-12-12 12:12:12",
        "No": 10010,
        "Address": "No. 18, Wantang Road",
        "HashCode": ""
    });

    useEffect(() => {
        dataApi().then(res => {
            console.log(res);
            if (res.code === 1) {
                setDate(res.data)
            } else {
                message.info(res.msg)
            }
        }).catch(err => {
            message.error(err);
        })
    }, []);

    return (
        <div className="container">
            <header>
                <Steps>
                    <Step status="finish" title="授权成功" icon={<UserOutlined />} />
                    <Step status="finish" title="获取仿真数据" icon={<SolutionOutlined />} />
                    <Step status="process" title="演算中" icon={<LoadingOutlined />} />
                    <Step status="wait" title="ok" icon={<SmileOutlined />} />
                </Steps>
            </header>
            <main className="container__main">
                <aside className="container__left">
                    <div className="container__half">
                        <Image
                            width={500}
                            src={web3dImg}
                        />
                    </div>
                </aside>

                <nav className="container__right">
                    <Descriptions title="演算数据基础信息">
                        <Descriptions.Item label="ModelName">{data.ModelName}</Descriptions.Item>
                        <Descriptions.Item label="Version">{data.Version}</Descriptions.Item>
                        <Descriptions.Item label="label">{data.label}</Descriptions.Item>
                        <Descriptions.Item label="Remark">{data.Remark}</Descriptions.Item>
                        <Descriptions.Item label="No">
                            {data.No}
                        </Descriptions.Item>
                        <Descriptions.Item label="Address">
                            {data.Address}
                        </Descriptions.Item>
                    </Descriptions>
                </nav>
            </main>
            <Descriptions title="演算数据可调区域" style={{ textAlign: 'center' }} >
            </Descriptions>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
            >
                <Form.Item label="输入命令">
                    <Input />
                </Form.Item>
                <Form.Item label="选择类型">
                    <Select>
                        <Select.Option value="Demo1">Demo1</Select.Option>
                        <Select.Option value="Demo2">Demo2</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="阈值">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="自动开关" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="处理方式">
                    <Button>在线演算</Button> <Button>离线演算</Button>
                </Form.Item>
            </Form>
        </div>
    )};

export default App;
