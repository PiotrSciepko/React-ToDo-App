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
            {tasks.map(task=>task.toString())}
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector("#app"));