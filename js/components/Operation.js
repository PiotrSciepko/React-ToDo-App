import React, {useState} from 'react';

const Operation = (props) => {
    // const {description, id, onRemoveOperation, timeSpent, status} = props;
    const [toggleAddTime, setToggleAddTime] = useState(false);

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {props.description}

                {/*Czas wyświetlany tylko jeżeli większy od 0*/}
                <span className="badge badge-success badge-pill ml-2">
                    {props.timeSpent ?
                        (Math.floor(props.timeSpent / 60) + "h " + (props.timeSpent % 60) + "m") : null}
                </span>
            </div>

            {/*Formularz wyświetlany po naciśnięciu "Add time", po zapisie czasu znika*/}
            <form hidden={!toggleAddTime}>
                <div className="input-group input-group-sm">
                    <input type="number"
                           className="form-control"
                           placeholder="Spent time in minutes"
                           style={{width: "12rem"}}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success"><i className="fas fa-save"/></button>
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