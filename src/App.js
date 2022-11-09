import css from './App.module.css'
import { TASK_TYPE } from './const'
import React, { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {

  let tasks = JSON.parse(localStorage.getItem("tasksList")) ? JSON.parse(localStorage.getItem("tasksList")) : []
 
  const [tasksList, setTasksList] = useState(tasks)

  const backlogTasks = tasksList ? tasksList.filter(task => task.type === TASK_TYPE.BACKLOG) : []
  const readyTasks = tasksList ? tasksList.filter(task => task.type === TASK_TYPE.READY) : []
  const inprogressTasks = tasksList ? tasksList.filter(task => task.type === TASK_TYPE.IN_PROGRESS) : []
  const finishedTasks = tasksList ? tasksList.filter(task => task.type === TASK_TYPE.FINISHED) : []

  const handleAddTask = (task) => {
    const newTasksList = [...tasksList, task]
    localStorage.setItem('tasksList', JSON.stringify(newTasksList))
    setTasksList(newTasksList)
  }

  const handleMoveTask = (id, type) => {
    const newTasksList = tasksList.map(task => {task.type = task.id === id ? type : task.type 
      return task
    })
    localStorage.setItem('tasksList', JSON.stringify(newTasksList))
    setTasksList(newTasksList)
  }

  return (
    <div className={css.app}>
      <Header />
      <Main 
        tasks={[backlogTasks, readyTasks, inprogressTasks, finishedTasks]}
        handleAddTask={handleAddTask}
        handleMoveTask={handleMoveTask}
      />
      <Footer 
        activeTasks={backlogTasks.length}
        finishedTasks={finishedTasks.length}
      />
    </div>
  );
}

export default App;