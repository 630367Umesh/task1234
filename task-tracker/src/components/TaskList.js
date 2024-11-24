import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, editTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} editTask={editTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
