import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';

export default class Modals extends Component {
    state = {
        isModalVisible1: false,
        isModalVisible2: false,
        isModalVisible3: false,
        isModalVisible4: false
    }
    // Open--基础模态框
    showModal = (type) => {
        this.setState({
            [type]: true
        })
    }

    // onOk--基础模态框
    handleOk = (type) => {
        this.setState({
            [type]: false
        })
    }

    //onCancel--基础模态框
    handleCancel = (type) => {
        this.setState({
            [type]: false
        })
    }

    // Open--确认对话框
    showConfirm = (type) => {
        Modal[type]({
            title: '确认？',
            content: '欢迎进入恩赞集团后台管理系统！',
        });
    }

    render() {
        let { isModalVisible1, isModalVisible2, isModalVisible3, isModalVisible4, } = this.state;
        let { showModal, handleOk, handleCancel, showConfirm } = this;
        return (
            <div>
                <Card title='基础模态框' className='card-wrap'>
                    <Button type="primary" onClick={() => { showModal('isModalVisible1') }}>Open</Button>
                    <Button type="primary" onClick={() => { showModal('isModalVisible2') }}>自定义</Button>
                    <Button type="primary" onClick={() => { showModal('isModalVisible3') }}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => { showModal('isModalVisible4') }}>水平垂直居中</Button>
                </Card>
                <Card title='确认对话框' className='card-wrap'>
                    <Button type="primary" onClick={() => { showConfirm('confirm') }}>Confirm</Button>
                    <Button type="primary" onClick={() => { showConfirm('info') }}>Info</Button>
                    <Button type="primary" onClick={() => { showConfirm('success') }}>Success</Button>
                    <Button type="primary" onClick={() => { showConfirm('warning') }}>Warning</Button>
                </Card>
                <Modal title="React" visible={isModalVisible1} onOk={() => { handleOk('isModalVisible1') }} onCancel={() => { handleCancel('isModalVisible1') }}>
                    <p>欢迎进入恩赞集团后台管理系统</p>
                </Modal>
                <Modal
                    title="React"
                    visible={isModalVisible2}
                    onOk={() => { handleOk('isModalVisible2') }}
                    onCancel={() => { handleCancel('isModalVisible2') }}
                    okText="确认"
                    cancelText="取消"
                ><p>欢迎进入恩赞集团后台管理系统</p></Modal>
                <Modal
                    title="React"
                    style={{ top: 20 }}
                    visible={isModalVisible3}
                    onOk={() => { handleOk('isModalVisible3') }}
                    onCancel={() => { handleCancel('isModalVisible3') }}
                ><p>欢迎进入恩赞集团后台管理系统</p>
                </Modal>
                <Modal
                    title="React"
                    centered
                    visible={isModalVisible4}
                    onOk={() => { handleOk('isModalVisible4') }}
                    onCancel={() => { handleCancel('isModalVisible4') }}
                ><p>欢迎进入恩赞集团后台管理系统</p>
                </Modal>

            </div>
        )
    }
}
