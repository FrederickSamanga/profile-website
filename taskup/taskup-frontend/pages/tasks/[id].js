// pages/tasks/[id].js
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CommentList from '../../components/CommentList';

const TaskDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:9090/api/tasks/${id}`)
        .then(response => response.json())
        .then(data => setTask(data))
        .catch(error => console.error('Error fetching task:', error));
    }
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
      <p className="text-gray-700 mb-4">{task.description}</p>
      <CommentList taskId={id} />
    </div>
  );
};

export default TaskDetail;