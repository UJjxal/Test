import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RequestAccess from './Pages/RequestAccess';
import Dashboard from './Pages/Dashboard';
import Admin from './Pages/Admin';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginScreen from './Pages/LoginScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="RequestAccess" element={<RequestAccess />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
