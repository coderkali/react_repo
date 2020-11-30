import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './form'
import LoginForm from './loginform'


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Form/> */}
    <LoginForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

