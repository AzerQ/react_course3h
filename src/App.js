import React, {useContext, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import {PostsContext} from "./context/PostsContext";


function App() {
    const posts = useContext(PostsContext)
    return (<div className="App">
        <AddPost/>
        <PostList posts={posts.posts} title="Все посты"/>
    </div>);
}

export default App;
