import React from 'react';

function TaskItem({ task, editTask, deleteTask }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
}

export default TaskItem;
