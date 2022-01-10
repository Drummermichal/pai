import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Application from './components/application';
import Login from './components/login'
import Register from './components/register';
import Dashboard from './components/dashboard';
import NotFound from './components/notfound';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Application />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard">
              <Route path=":id" element={<Dashboard />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
