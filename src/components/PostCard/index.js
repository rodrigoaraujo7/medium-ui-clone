import React from 'react';
import './PostCard.css';

export default ({display}) => {
    return (
        <div className={display ? 'postcard' : 'postcard postcard--none'}>
            <h2>WRITTEN BY</h2>
            <h1>Rodrigo</h1>
            <p>Front-end developer</p>
            <button>Follow</button>
        </div>
    )
}