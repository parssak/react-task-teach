import React from 'react';

const TaskItem = ({ task, toggleTask, deleteTask}) => {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
      <input type="checkbox" checked={task.completed} onClick={() => toggleTask(task.id)} />
      {task.title}
      <span onClick={() => deleteTask(task.id)}>X</span>
    </div>
  );
}

export default TaskItem;
