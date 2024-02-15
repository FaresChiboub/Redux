import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteTask, EditTask } from './Redux/action'; // Assuming you have an EditTask action

function Task({ el }) {
    const dispatch = useDispatch();
    const [boolean, setBoolean] = useState(false); // Initialize to false
    const [editTask, setEditTask] = useState(el.description); // Initialize to task description

    const handleSave = () => {
        dispatch(EditTask(el.id, editTask)); // Dispatch action to edit task
        setBoolean(false); // Close edit mode after saving
    };

    return (
        <div style={{ display: "flex", gap: "35px" }}>
            <p>Id: {el.id}</p>
            <p>{el.description}</p>
            <input type="checkbox" checked={el.isDone} />

            <button onClick={() => dispatch(DeleteTask(el.id))}>Delete</button>

            {boolean ? (
                <>
                    <input
                        type='text'
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : null}

            <button onClick={() => setBoolean(!boolean)}>Edit</button>
        </div>
    );
}

export default Task;
