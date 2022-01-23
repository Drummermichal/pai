import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { history } from './utilities';
import Application from './application';

ReactDOM.render(
    <Router history={history}>
        <Application />
    </Router>,
    document.getElementById('root')
);
