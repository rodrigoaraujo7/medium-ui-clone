import React from 'react';
import './Document.css';

export default () => {
    return (
        <div className="document">
            <div className="document--container">
                <h1>ReactJS: A JavaScript library for building user interfaces</h1>

                <div className="document--author">
                    <img />
                    <p className="document--authorName">Rodrigo</p>
                    <p className="document--releaseDate">July 17, 2020</p>
                </div>
            </div>
        </div>
    )
}