import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Utils from '../../utils/utils';
import axios from 'axios';


export default class Header extends Component {
    state = {}
    UNSAFE_componentWillMount() {
        this.setState({
            userName: "符恩铭"
        })
        // 日期
        let time = () => {
            let systime = Utils.formteDate(new Date());
            this.setState({
                systime
            })
        }
        time();
        setInterval(() => {
            time();
        }, 1000);
        this.getWeatherAPIData();  // 调用天气函数
    }

    // 天气
    getWeatherAPIData() {
        axios.get("https://devapi.qweather.com/v7/weather/now?location=101010100&key=9a5fb1ac50484e8e8e2854a110ff3fb3")
            .then(res => {
                if (res) {
                    let weather = res.data.now.text;
                    this.setState({ weather });
                }
            })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎您，{this.state.userName}</span>
                        <a href="#" style={{ color: "red" }}>退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col >
                    <Col span={20} className="weather">
                        <span className="date">{this.state.systime}</span>
                        <span className="weather-datail">{this.state.weather}</span>
                    </Col >
                </Row >
            </div >
        )
    }
}
