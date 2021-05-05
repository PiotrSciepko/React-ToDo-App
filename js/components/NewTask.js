import React, {useEffect, useState} from 'react';

const NewTask = ({onNewTask}) => {
    const [newTask, setNewTask] = useState({title: '', description: ''});

    const handleInput = e => {
        const {name, value} = e.target;
        setNewTask(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        onNewTask(newTask);
        setNewTask({title:'', description:''});
    }

    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="title"
                               value={newTask.title}
                               placeholder="Title"
                               onChange={handleInput}/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="description"
                               value={newTask.description}
                               placeholder="Description"
                               onChange={handleInput}/>
                    </div>
                    <button type={"submit"} className="btn btn-info">
                        Add task
                        <i className="fas fa-plus-circle ml-1"/>
                    </button>
                </form>
            </div>
        </div>

    );
};

export default NewTask;