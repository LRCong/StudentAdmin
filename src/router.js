import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import AdminLayout from './pages/Layout'
import Login from './pages/Login'

export default function IRouter() {
    return <Router>
        <Switch>
            <Route path="/home" component={AdminLayout}></Route>
            <Route path="/login" component={Login}></Route>
        </Switch>
    </Router>
}