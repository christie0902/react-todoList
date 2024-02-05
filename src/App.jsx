import { useState } from 'react'
import './App.css'
import Task from './task'
import TaskForm from './taskForm'

function App() {
  const [tasks,setTasks] = useState ([]);

  const addTask = (name) => {
    setTasks( (prev) => {
    return [...prev, {name, done: false}];
   })
  }

  return (
    <main>
     <TaskForm onAdd={addTask}/>
     {tasks.map(task =><Task key={task.name+(Math.random())} {...task}/>)}
    </main>
  )
}

export default App
