import React, {useContext, useState} from "react"
import PostItem from "./PostItem";
import {PostsContext} from "../context/PostsContext";

function PostList({posts, title}) {
    const Context = useContext(PostsContext);
    return (
        <>
            <h1 style={{textAlign: "center"}}>{`${title}(${Context.posts.length
            })`}</h1>
            <button onClick={()=>{Context.clear()}}>remove all</button>
            {
                posts.map(post => <PostItem key={post.id} post={post}/>)
            }
        </>
    )
}

export default PostList;
