import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);

  return (
    <div>
        <h2>Task-10</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

