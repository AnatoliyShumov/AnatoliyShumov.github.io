import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Layout from '../layout/layout';
import Home from '../../App';
import history from '../history/history'

const Routes = (store) => {

    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default Routes;


