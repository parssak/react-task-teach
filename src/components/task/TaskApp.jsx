import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskItem from './TaskItem';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = () => {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }
    
    setTasks([...tasks, newTask])
    setTaskTitle('');
  }

  const toggleTask = (taskID) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex(task => task.id === taskID);
    if (index !== -1) {
      updatedTasks[index].completed = !updatedTasks[index].completed;
      setTasks(updatedTasks);
    }
  }


  const deleteTask = (taskID) => {
    const updatedTasks = tasks.filter(task => task.id !== taskID);
    setTasks(updatedTasks);
  }
  
  return (
    <div>
      <input type="text" onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle} onKeyDown={(e) => e.key === 'Enter' && addTask()}/>
      <button onClick={addTask}>Create task</button>
      {
        tasks.map((task) => (<TaskItem task={task} key={task.id} toggleTask={toggleTask} deleteTask={deleteTask} />))
      }
    </div>
  );
}

export default TaskApp;
