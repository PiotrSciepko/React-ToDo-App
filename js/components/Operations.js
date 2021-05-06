import React, {useState} from 'react';
import Operation from "./Operation";
import {addOperation} from "../api/operations";

const Operations = (props) => {
    // const {taskID, form, setForm, operations, setOperations, status} = props;
    const [newOperation, setNewOperation] = useState({description: '', timeSpent: 0});

    const handleInput = e => {
        const {name, value} = e.target;
        setNewOperation(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        addOperation(props.taskID, newOperation, props.setOperations);
        props.setForm(prev => !prev);
        setNewOperation({description: '', timeSpent: 0});
    }

    return (
        <>
            <div className="card-body">
                <form hidden={props.form} onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Operation description"
                               name={"description"} value={newOperation.description} onChange={handleInput}/>

                        <div className="input-group-append">
                            <button type={"submit"} className="btn btn-info">
                                Add
                                <i className="fas fa-plus-circle ml-1"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <ul className="list-group list-group-flush">
                {/*Komponenty Operation*/}
                {props.operations.map(operation => <Operation key={operation.id} description={operation.description}
                                                              timeSpent={operation.timeSpent}/>)}
            </ul>
        </>
    );
};

export default Operations;