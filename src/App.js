import React, {useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Vero sed sit sed qui est amet amet."},
        {id: 2, title: "C#", body: "Amet veniam luptatum facilisis sea lorem aliquyam ut diam et."},
        {id: 3, title: "Ruby", body: "Nonummy amet duo laoreet sanctus nulla erat justo nonumy dolor."},
        {id: 4, title: "Java", body: "Dolore possim diam gubergren ut odio sit no kasd duisr."},
        {id: 5, title: "React", body: "Sed no erat sea labore amet et diam dolore invidunt."},
        {id: 6, title: "Python", body: "Et justo sed amet feugait et sadipscing dolores rebum diam."}
    ])
    return (<div className="App">
        <AddPost/>
        <PostList posts={posts} title="Все посты (all)"/>
    </div>);
}

export default App;
