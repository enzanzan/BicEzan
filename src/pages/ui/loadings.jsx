import React, { Component } from 'react';
import { Card, Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default class Loadings extends Component {
    render() {
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
        return (
            <div>
                <Card title="Spin用法" className='card-wrap'>
                    <Spin size="small" />
                    <Spin style={{ margin: 10 }} />
                    <Spin size="large" />
                    <Spin indicator={antIcon} style={{ margin: 10 }} />
                </Card>
                <Card title="内容遮罩" className='card-wrap'>
                    <Spin spinning={false}>
                        <Alert
                            message="恩赞集团"
                            description="欢迎来到恩赞后台管理系统"
                            type="info"
                            className="alert"
                        />
                    </Spin>
                    <Spin spinning={true}>
                        <Alert
                            message="恩赞集团"
                            description="欢迎来到恩赞后台管理系统"
                            type="warning"
                            className="alert"
                        />
                    </Spin>
                    <Spin spinning={true} tip="加载中...">
                        <Alert
                            message="恩赞集团"
                            description="欢迎来到恩赞后台管理系统"
                            type="success"
                            className="alert"
                        />
                    </Spin>
                    <Spin spinning={true} indicator={antIcon} >
                        <Alert
                            message="恩赞集团"
                            description="欢迎来到恩赞后台管理系统"
                            type="info"
                            className="alert"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}
