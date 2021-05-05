import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {addTask, getTasks, removeTask} from "./api/tasks";
import Task from "./components/Task";
import NewTask from "./components/NewTask";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks(setTasks)
    }, []);

    const handleAddTask = newTask => {
        newTask.status = "open";
        addTask(newTask, setTasks);
    }

    const handleRemoveTask = id => {
        removeTask(id, setTasks);
    }

    return (
        <>
            <NewTask onNewTask={handleAddTask}/>
            {tasks.map(task => <Task key={task.id} title={task.title} description={task.description}
                                     status={task.status} id={task.id} onRemoveTask={handleRemoveTask}/>)}
        </>
    )
}

ReactDOM.render(
    <App/>
    , document.querySelector("#app"));