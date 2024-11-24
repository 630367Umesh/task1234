import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [editingTask, setEditingTask] = useState(null); // Track the task being edited

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    if (editingTask) {
      // If editing, update the task
      const updatedTasks = tasks.map((task) =>
        task === editingTask ? newTask : task
      );
      setTasks(updatedTasks);
      setEditingTask(null); // Reset editing state
    } else {
      // If adding a new task
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const editTask = (taskToEdit) => {
    setEditingTask(taskToEdit); // Set the task to be edited
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} editingTask={editingTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
