import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    placeholder="Add a new task" 
                />
                <button className="btn btn-primary" type="submit">Add Task</button>
            </div>
        </form>
    );
};

export default TaskInput;
