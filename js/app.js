import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {getTasks} from "./api/tasks";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks(setTasks)
    }, [])

    return (
        <>
            {tasks.map(task=><h1>{task.title}</h1>)}
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector("#app"));