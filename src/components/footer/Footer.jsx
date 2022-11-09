import React from 'react';
import css from './Footer.module.css'

const Footer = (props) => {
    
    const {activeTasks, finishedTasks} = props

    return (
        <footer className={css.footer}>
            <div className={css.statistics}>
                <div>Active tasks: {activeTasks}</div>
                <div className={css.finished}>Finished tasks: {finishedTasks}</div>
            </div>
            <div>Kanban board by Tarasov Kirill, 2022</div>
        </footer>
    )
}

export default Footer