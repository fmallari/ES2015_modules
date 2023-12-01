
import fruits from './fruits';
import {choice, remove} from './helpers';import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let fruit = choice(fruits);

console.log('I'd like one ${fruit}, pleace`);
console.log(`Here you go: {fruit};
console.log(`Yum! May I have another one?`);

let remaining = remove(fruit, fruits);

console.log(`So sorry, we sold out! `)
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


