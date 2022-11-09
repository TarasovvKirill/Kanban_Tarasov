import React from 'react';
import css from './AddNewTask.module.css';
import { useState } from 'react';
import uuid from 'react-uuid'

const AddNewTask = (props) => {

    const {type, handleAddTask, setIsAdded, setIsNewTask} = props
    const [value, setValue] = useState('')

    const handleClick = () => {
        const newTask = {id: uuid(), name: value, description: '', type: type}

        if (value.length > 0) {
            handleAddTask(newTask)
        }
        setIsAdded(false)
        setIsNewTask(false)
    }

    return (
        <div className={css.newTask}>
            <input type='text' autoFocus className={css.item} value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default AddNewTask