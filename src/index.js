import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListQuestion from './components/listQuestion';
import Intro from './components/intro';
import Question from './components/question';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main-app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/" element={<App />}>
          <Route path="questions" element={<ListQuestion />} />
          <Route path=":questionId" element={<Question />} />
        </Route>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
