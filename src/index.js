import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App texto = "Olá Gabriel Ferezim"/>
    <App texto ={{chamada: "Dankicode", chamada2: "Alura"}}/>
    <Header />
  </React.StrictMode>
);


