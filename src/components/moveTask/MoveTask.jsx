import React from "react";
import css from './MoveTask.module.css'

const MoveTask = (props) => {

    const { type, moveTasks, handleMoveTask, setIsAdded } = props

    const handleChange = (e) => {
        let task = null
        if (e.target.selectedIndex > 0) {
            task = moveTasks[e.target.selectedIndex - 1]
            handleMoveTask(task.id, type)
        }
        setIsAdded(false)
    }

    return (
        <select autoFocus className={css.item + ' ' + css.moveTask} onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)}>
            <option value></option>
            {moveTasks.map((task) => {
                return <option key={task.id}>{task.name}</option>
            })}
        </select>
    )
}

export default MoveTask