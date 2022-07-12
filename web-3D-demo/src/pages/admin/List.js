import {Avatar, List, message} from 'antd';
import React, {useEffect, useState} from 'react';
import {listApi} from "../../services/admin";

const dataInfo = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const App = () => {
    const [data,setDate] = useState(dataInfo);

    useEffect(() => {
        listApi().then(res => {
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
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<a href="https://ant.design">{item.userName} -- {item.createTime}</a>}
                        description={`Ant Design, a design language for background applications, is refined by Ant UED Team`}
                    />
                </List.Item>
            )}
        />
    )
};

export default App;
