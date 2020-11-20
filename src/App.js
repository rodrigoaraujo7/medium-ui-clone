import React from 'react';
import './App.css';
import Header from './components/Header';
import Document from './components/Document';

export default () => {
  return (
    <div className="page">
      <Header />

      <Document />

      <footer>
        <h1>Developed by Rodrigo Araujo</h1>
        <h2><img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" alt="Github logo" />/rodrigoaraujo7</h2>
      </footer>
    </div>
  )
}