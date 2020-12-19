import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Document from './components/Document';
import PostCard from './components/PostCard';

export default () => {
  const [displayNone, setDisplayNone] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 200) {
        setDisplayNone(true)
      } else {
        setDisplayNone(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  })

  return (
    <div className="page">
      <Header />

      <Document />

      <PostCard display={displayNone} />

      <footer>
        <h1>Developed by Rodrigo Araujo</h1>
        <h2><img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" alt="Github logo" />/rodrigoaraujo7</h2>
      </footer>
    </div>
  )
}