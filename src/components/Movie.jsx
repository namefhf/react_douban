import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;
import MovieList from '@/components/MovieList.jsx'
import MovieDetail from '@/components/MovieDetail.jsx'
export default class Movie extends Component {
    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="in_theaters"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
                        <Menu.Item key="comming_soon"><Link to="/movie/comming_soon/1">即将上映</Link></Menu.Item>
                        <Menu.Item key="top250"><Link to="/movie/top250/1">TOP250</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '24px' }}>
                    <Content
                        style={{
                            background: '#fff',
                            margin: 0,
                        }}
                    >
                        <Switch>
                            <Route path='/movie/detail/:id' component={MovieDetail} exact></Route>
                            <Route path='/movie/:type/:page' component={MovieList}></Route>
                        </Switch>

                    </Content>
                </Layout>
            </Layout>
        )
    }
}
