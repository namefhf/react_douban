import React, { Component } from 'react'
import { HashRouter, Link, Route, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from '@/components/Home.jsx'
import Movie from '@/components/Movie.jsx'
import About from '@/components/About.jsx'

import styles from './css/app.scss'

const { Header, Content, Footer } = Layout;
export default class App extends Component {

    render() {
        return (
            <HashRouter>
                <Layout className="layout" style={{ height: "100%" }}>
                    <Header>
                        <div className="logo" style={{
                            width: '120px',
                            height: '31px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            float: 'left',
                            margin: '16px 28px 16px 0',
                            lineHeight: '31px',
                            color: '#fff',
                            textAlign: 'center'
                        }} >LOGO</div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
                            <Menu.Item key="movie"><Link to="/movie/in_theaters/1">电影</Link></Menu.Item>
                            <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{}}>
                        <Route path="/home" component={Home}></Route>
                        {/* <Route path="/" render={
                            () => 
                               (<Redirect to="/home" />)
                        }></Route> */}
                        <Route path="/movie" component={Movie}></Route>
                        <Route path="/about" component={About}></Route>
                    </Content>
                    <Footer style={{ textAlign: 'center', backgroundColor: '#001529' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </HashRouter>

        )
    }
}
