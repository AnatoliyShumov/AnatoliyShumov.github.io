import React from 'react';
import { Switch,HashRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import User from './pages/Users/User';
// import history from './tools/history'

const Routes = () => {
    return (
        <HashRouter >
            <Switch>
                <Layout exact path="/" component={Home} />
                <Layout  path="/user/:id" component={User} />
                <Layout  path="/user" component={Users} />
            </Switch>
        </HashRouter>
    );
};

export default Routes;