import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PostsState from "./context/PostsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PostsState>
        <App/>
    </PostsState>
);

