import React, { Component } from 'react'
import { HashRouter as Router, Link, Route ,Redirect} from 'react-router-dom';
import Home from '@/components/Home.jsx'
import About from '@/components/About.jsx'
import Movie from '@/components/Movie.jsx'
import Subhome from '@/components/Subhome.jsx'


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>根组件</h1>
                    <Link to='/home' >首页</Link>
                    <Link to='/movie/11'>电影</Link>
                    <Link to='/about'>关于</Link>
                    {/* 路由规则 */}
                    <Route path='/home' render={() => (
                        <Home>
                            <Route path="/home/subhome" component={Subhome}></Route>
                        </Home>
                    )}>
                    </Route>
                    <Route path="/" render={() => (
                        <Redirect to="/home" />)}>
                    </Route>
                    <hr />
                    <Route path='/movie/:id' component={Movie} exact>
                    </Route>
                    <hr />
                    <Route path='/about' component={About}></Route>
                    <hr />
                </div>
            </Router>

        )
    }
}
