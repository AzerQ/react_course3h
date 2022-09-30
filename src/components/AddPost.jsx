import React, {useContext, useState} from "react"
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import {PostsContext} from "../context/PostsContext";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function AddPost() {
    let Posts = useContext(PostsContext);
    let [postName, setPostName] = useState("New post");
    let [postDecription, setPostDescription] = useState("Post description");
    return (
        <>
            <div>
                <MyInput value={postName} type="text" placeholder="Post name"
                         onChange={(event) => {
                             setPostName(event.target.value);
                         }}/>
                <MyInput value={postDecription} type="text" placeholder="Description"
                         onChange={(event) => {
                             setPostDescription(event.target.value);
                         }}/>
                <MyButton onClick={() => {
                    Posts.addPost({
                        id: 9999 + getRandomInt(2000000),
                        title: postName,
                        body: postDecription
                    })
                    console.log(Posts);
                }}>Create</MyButton>
            </div>
        </>
    )
}

export default AddPost;