// components/TaskList.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9090/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <ul className="space-y-4">
        {tasks.map(task => (
          <li key={task.id} className="border p-4 rounded-lg shadow-sm bg-white">
            <Link href={`/tasks/${task.id}`}>
              <a className="text-lg font-semibold text-blue-600 hover:underline">{task.title}</a>
            </Link>
            <p className="text-gray-700">{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;