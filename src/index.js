import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

import App from './App.jsx';
React.Component.prototype.$axios = axios
ReactDom.render(
    <App />,
    document.getElementById('app'))

