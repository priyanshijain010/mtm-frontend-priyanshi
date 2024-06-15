import React, { useState } from 'react';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditText(tasks[index]);
    };

    const handleUpdate = (index) => {
        updateTask(index, editText);
        setEditIndex(null);
        setEditText('');
    };

    return (
        <ul className="list-group">
            {tasks.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {editIndex === index ? (
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                value={editText} 
                                onChange={(e) => setEditText(e.target.value)} 
                            />
                            <button className="btn btn-success" onClick={() => handleUpdate(index)}>Update</button>
                        </div>
                    ) : (
                        <>
                            <span>{task}</span>
                            <div>
                                <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteTask(index)}>Delete</button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;