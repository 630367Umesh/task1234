import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, editingTask }) {
  const [task, setTask] = useState({ title: '', description: '', dueDate: '', status: 'Pending' });

  // Set form data when editing
  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      addTask(task);
      setTask({ title: '', description: '', dueDate: '', status: 'Pending' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={task.title} onChange={handleChange} placeholder="Task Title" required />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Task Description"></textarea>
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
