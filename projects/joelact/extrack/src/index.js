import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Login from './components/user/login/Login';
import Dashboard from './components/dashboards/MainDashboard';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
