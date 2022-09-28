import React, {useState} from "react";

function App() {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState("Какой-то текст");

    function inc() {
        setLikes(likes + 1);
        console.log(`likes count = ${likes}`);
    }

    function dec() {
        setLikes(likes - 1);
        console.log(`likes count = ${likes}`);
    }

    //Hi there

    return (
        <div className="App">
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input type="text" value={value}
                   onChange={event => setValue(event.target.value) }
            />
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    );
}

export default App;
