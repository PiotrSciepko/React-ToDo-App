import React, {useEffect, useState} from 'react';
import Operations from "./Operations";
import {getOperations} from "../api/operations";
import {updateTask} from "../api/tasks";

const Task = (props) => {
    const [status, setStatus] = useState(props.status);
    const [operations, setOperations] = useState([]);
    const [form, setForm] = useState(true);

    useEffect(() => {
        getOperations(props.id, setOperations);
    }, [])

    const handleFinish = () => {
        const finishTask = {
            id: props.id,
            title: props.title,
            description: props.description,
            status: "closed"
        }
        updateTask(finishTask, setStatus);
    }

    return (
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{props.title}</h5>
                    <h6 className="card-subtitle text-muted">{props.description}</h6>
                </div>
                <div>
                    {/*Przyciski "Add operation" i "Finish" mają być widoczne
                      tylko jeżeli status zadania jest "open"*/}
                    <button className="btn btn-info btn-sm mr-2" style={{display: status === "open" || "none"}}
                            onClick={() => setForm(prev => !prev)}>
                        Add operation
                        <i className="fas fa-plus-circle ml-1"/>
                    </button>

                    <button className="btn btn-dark btn-sm" style={{display: status === "open" || "none"}}
                            onClick={handleFinish}>
                        Finish
                        <i className="fas fa-archive ml-1"/>
                    </button>

                    {/*Przycisk usuwania ma być widoczny tylko
                      jeżeli nie ma żadnych operacji w zadaniu*/}
                    <button style={{display: operations.length ? "none" : "inline"}}
                            className="btn btn-outline-danger btn-sm ml-2" onClick={() => props.onRemoveTask(props.id)}>
                        <i className="fas fa-trash false"/>
                    </button>
                </div>
            </div>

            {/*Komponent Operations*/}
            <Operations taskID={props.id} operations={operations} setOperations={setOperations} form={form}
                        setForm={setForm} status={status}/>
        </section>
    );
};

export default Task;