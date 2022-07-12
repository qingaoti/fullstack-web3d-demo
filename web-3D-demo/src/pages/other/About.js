import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import React from 'react';

const App = () => (
    <Result
        icon={<SmileOutlined />}
        title="Hi, I am qingaoti! 👋 Want to be a full stack developer"
        extra={<Button type="primary">ok,I see</Button>}
    />
);

export default App;
