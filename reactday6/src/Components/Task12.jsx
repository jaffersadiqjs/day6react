import React, { useState } from 'react';

const Task12 = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = () => {
    if (tasks.length > 0) {
      setTasks(tasks.slice(0, -1));
    }
  };

  return (
    <div>
        <h2>Task-12</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleRemoveTask}>Remove Last Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task12;