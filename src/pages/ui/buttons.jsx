import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, DownloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import './ui.less';

const ButtonGroup = Button.Group;
export default class IButton extends Component {
    state = {
        loading: true,
        size: 'large'
    };

    // loading 关闭
    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }

    // radio size
    handleSizeChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render() {
        let { size, loading } = this.state;
        return (
            <div>
                <Card title="基础按钮" className='card-wrap'>
                    <Button type='primary'>Ezan</Button>
                    <Button>Ezan</Button>
                    <Button type='dashed'>Ezan</Button>
                    <Button type='primary' danger>Ezan</Button>
                    <Button disabled >Ezan</Button>
                </Card>
                <Card title="图形按钮" className='card-wrap'>
                    <Button type='primary' icon={<PlusOutlined />}>创建</Button>
                    <Button type='primary' icon={<EditOutlined />}>编辑</Button>
                    <Button type='primary' icon={<DeleteOutlined />}>删除</Button>
                    <Button shape='circle' icon={<SearchOutlined />}></Button>
                    <Button type='primary' icon={<SearchOutlined />}>搜索</Button>
                    <Button type='primary' icon={<DownloadOutlined />}>下载</Button>
                </Card>
                <Card title="Loading按钮" className='card-wrap'>
                    <Button type='primary' loading={loading} >确定</Button>
                    <Button type='primary' shape='circle' loading={loading} ></Button>
                    <Button loading={loading} >点击加载</Button>
                    <Button shape='circle' loading={loading} ></Button>
                    <Button type='primary' onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组" className='card-wrap' >
                    <ButtonGroup>
                        <Button type="primary" icon={<LeftOutlined />}>后退</Button>
                        <Button type="primary" icon={<RightOutlined />}>前进</Button>
                    </ButtonGroup>
                </Card>
                <Card title="按钮尺寸" className='card-wrap' >
                    <Radio.Group value={size} onChange={this.handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <br /><br />
                    <Button type="primary" size={size}>Primary</Button>
                    <Button size={size}>Default</Button>
                    <Button type="dashed" size={size}>Dashed</Button>
                </Card>
            </div>
        )
    }
}
