import React from "react"
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function AddPost() {

    const addNewPost = () => {

    }


    return (
        <>
            <form action="">
                <MyInput onClick={} type="text" placeholder="Post name"/>
                <MyInput type="text" placeholder="Description"/>
                <MyButton>Create</MyButton>
            </form>
        </>
    )
}

export default AddPost;