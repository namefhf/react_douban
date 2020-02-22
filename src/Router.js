import { HashRouter, Link, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Home from '@/components/Home.jsx'
import About from '@/components/About.jsx'
import Movie from '@/components/Movie.jsx'
import Subhome from '@/components/Subhome.jsx'
export default class Router extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Route path='/home' render={() => (
                        <Home>
                            <Route path="/home/subhome" component={Subhome}></Route>
                        </Home>
                    )}>

                    </Route>
                    <hr />
                    <Route path='/movie/:id' component={Movie} exact>
                    </Route>
                    <hr />
                    <Route path='/about' component={About}></Route>
                    <hr />
                </HashRouter>

            </div>
        )
    }
}
