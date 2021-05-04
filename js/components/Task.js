import React, {useState} from 'react';

const Task = (props) => {
    // const {title, description, id, status, onRemoveTask} = props;
    const [status, setStatus] = useState(props.status);

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
                    <button className="btn btn-info btn-sm mr-2" style={{display: status === "open" || "none"}}>
                        Add operation
                        <i className="fas fa-plus-circle ml-1"/>
                    </button>

                    <button className="btn btn-dark btn-sm" style={{display: status === "open" || "none"}}>
                        Finish
                        <i className="fas fa-archive ml-1"/>
                    </button>

                    {/*Przycisk usuwania ma być widoczny tylko
                      jeżeli nie ma żadnych operacji w zadaniu*/}
                    <button className="btn btn-outline-danger btn-sm ml-2">
                        <i className="fas fa-trash false"/>
                    </button>
                </div>
            </div>

            {/*Komponent Operations*/}
        </section>

    );
};

export default Task;