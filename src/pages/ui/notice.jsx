import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';

export default class Loadings extends Component {
    // 通知提醒框
    openNotification = (type, direction) => {
        if (direction) {
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: '恩赞集团',
            description: '欢迎来到恩赞后台管理系统'
        });
    };
    render() {
        let { openNotification } = this;
        return (
            <div>
                <Card title="通知提醒框" className='card-wrap'>
                    <Button type='primary' onClick={() => openNotification('success')}>Success</Button>
                    <Button type='primary' onClick={() => openNotification('info')}>Info</Button>
                    <Button type='primary' onClick={() => openNotification('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => openNotification('error')}>Error</Button>
                </Card>
                <Card title="通知提醒框" className='card-wrap'>
                    <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning', 'bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}> Error</Button>
                </Card>
            </div>
        )
    }
}
