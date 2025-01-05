// components/CommentList.js
import React, { useEffect, useState } from 'react';

const CommentList = ({ taskId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9090/api/tasks/${taskId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [taskId]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <ul className="space-y-4">
        {comments.map(comment => (
          <li key={comment.id} className="border p-4 rounded-lg shadow-sm bg-white">
            <p className="text-gray-700">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;