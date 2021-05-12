import React, {useState} from 'react';
import {updateOperation} from "../api/operations";

const Operation = (props) => {
    const [toggleAddTime, setToggleAddTime] = useState(false);
    const [timeSpent, setTimeSpent] = useState(props.timeSpent);
    const [inputTime, setInputTime] = useState('');

    const handleAddTime = e => {
        e.preventDefault();
        const updatedOperation = {
            id: props.id,
            description: props.description,
            timeSpent: +timeSpent + +inputTime
        }
        updateOperation(updatedOperation, setTimeSpent)
        setToggleAddTime(prev => !prev);
        setInputTime('');
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {props.description}

                {/*Czas wyświetlany tylko jeżeli większy od 0*/}
                <span className="badge badge-success badge-pill ml-2">
                    {timeSpent ?
                        (Math.floor(timeSpent / 60) + "h " + (timeSpent % 60) + "m") : null}
                </span>
            </div>

            {/*Formularz wyświetlany po naciśnięciu "Add time", po zapisie czasu znika*/}
            <form hidden={!toggleAddTime}>
                <div className="input-group input-group-sm">
                    <input type="number"
                           className="form-control"
                           placeholder="Spent time in minutes"
                           style={{width: "12rem"}}
                           value={inputTime}
                           onChange={e => setInputTime(e.target.value)}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success"
                                onClick={handleAddTime}>
                            <i className="fas fa-save"/>
                        </button>
                        <button className="btn btn-outline-dark"
                                onClick={e => {
                                    e.preventDefault();
                                    setToggleAddTime(prev => !prev)
                                }}><i className="fas fa-times false"/></button>
                    </div>
                </div>
            </form>

            {/*div wyświetlany domyślnie, znika po wciśnięciu "Add time"*/}
            <div hidden={toggleAddTime || props.status === "close"}>
                {/*Przycisk widoczny tylko jeżeli status zadania jest "open"*/}
                <button className="btn btn-outline-success btn-sm mr-2"
                        style={{display: props.status === "closed" && "none"}}
                        onClick={() => setToggleAddTime(prev => !prev)}>
                    Add time
                    <i className="fas fa-clock ml-1"/>
                </button>

                <button className="btn btn-outline-danger btn-sm" onClick={() => props.onRemoveOperation(props.id)}><i
                    className="fas fa-trash"/></button>
            </div>
        </li>
    );
};

export default Operation;