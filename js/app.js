import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {getTasks} from "./api/tasks";
import Task from "./components/Task";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks(setTasks)
    }, [])

    return (
        <>
            {tasks.map(task => <Task key={task.id} title={task.title} description={task.description}
                                     status={task.status} id={task.id}/>)}
        </>
    )
}

ReactDOM.render(
    <App/>
    , document.querySelector("#app"));