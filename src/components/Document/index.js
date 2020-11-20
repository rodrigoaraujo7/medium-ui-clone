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

                <p className="document--text">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>

                <img className="document--image" src="https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg" />

                <h2 className="document--subtitle">Component-Based</h2>

                <p className="document--text">
                    Build encapsulated components that manage their own state, then compose them to make complex UIs.
                </p>

                <p className="document--text">
                    Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                </p>

                <div className="document--list">
                    
                </div>
            </div>
        </div>
    )
}