import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ConsoleLog from './ex1';
import RenderingEffects from './ex2';
import AdsComponent from './ex3.tsx';
//import productData from './data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ConsoleLog />
    <RenderingEffects />
    <h1>Exercise 3</h1>
    <AdsComponent />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
