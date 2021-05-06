import React from 'react';
import Operation from "./Operation";

const Operations = (props) => {
    // const {taskID, form, setForm, operations, setOperations, status} = props;
    return (
        <>
            <div className="card-body">
                <form hidden={props.form}>
                    <div className="input-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Operation description"/>

                        <div className="input-group-append">
                            <button className="btn btn-info">
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