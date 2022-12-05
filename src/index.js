import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Resource from "./ResourceType"
//import Memo from "./UseMemo"
// import UseReducer from "./UseReducer"
import Context from "./UseContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <App /> */}
    {/* <Resource /> */}
    {/* <Memo /> */}
    {/* <UseReducer /> */}
    <Context />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
