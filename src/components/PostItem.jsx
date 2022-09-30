import React, {useContext} from "react"
import "../styles/PostItem.css"
import {PostsContext} from "../context/PostsContext";

function PostItem(props) {
    const Context = useContext(PostsContext);
    return (
        <>
            <div className="post">
                <div className="post__content">
                    <strong>[{props.post.id}] {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <button onClick={() => {
                        Context.removePost(props.post.id);
                        console.log('removed');
                        console.log(Context.posts);
                    }}>Delete
                    </button>
                </div>
            </div>
        </>);
}

export default PostItem;