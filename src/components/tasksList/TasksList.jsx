import React from 'react';
import css from './TasksList.module.css';
import { TASK_TYPE, TASK_TITLE } from '../../const';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddNewTask from '../addNewTask/AddNewTask';
import MoveTask from '../moveTask/MoveTask'

const TasksList = (props) => {

    const {type, tasks, handleAddTask, handleMoveTask} = props
    const tasksList = tasks[type]

    let disabled = "";
    let moveTasksList = []
    if (type - 1 > -1) {
        moveTasksList = tasks[type - 1]
        disabled = moveTasksList.length > 0 ? "" : "disabled"
    }

    const [isAdded, setIsAdded] = useState(false)
    const [isNewTask, setIsNewTask] = useState(false)
    
    const handleClick = () => {
        setIsAdded(true)

        switch(type) {
            case TASK_TYPE.BACKLOG :
                setIsNewTask(true)
                break
            case TASK_TYPE.READY :
            case TASK_TYPE.IN_PROGRESS :
            case TASK_TYPE.FINISHED :
                setIsNewTask(false)
                break
            default :
        } 
    }

    return (
        <div className={css.list}>
            <nav>
                <h1 className={css.title}>{TASK_TITLE[type]}</h1>
                {tasksList.map(task => 
                    <li key={task.id} className={css.item}>
                       <Link to={`/tasks/${task.id}`}><div>{task.name}</div></Link>
                    </li>
                )}
            </nav>
            
            {!isAdded && <button disabled={disabled} className={css.button} onClick={()=> handleClick()}>
                + Add card
            </button>}
            
            {isAdded && isNewTask && <AddNewTask 
                type={type} 
                handleAddTask={handleAddTask}
                setIsAdded={setIsAdded} 
                setIsNewTask={setIsNewTask} 
            />}
            
            {isAdded && !isNewTask && <MoveTask 
                type={type} 
                moveTasks={moveTasksList}
                handleMoveTask={handleMoveTask}
                setIsAdded={setIsAdded}
            />}
        </div>
    )
}

export default TasksList