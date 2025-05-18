import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskFive = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setPost(response.data);
        console.log('API Data:', response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        API Integration
      </h1>

      <p className="mb-6 text-sm sm:text-base text-center">
        <strong>Objective:</strong> Integrate external data sources to provide dynamic content using Axios and JSONPlaceholder API.
      </p>

      {loading ? (
        <p className="text-center text-gray-500">Loading post...</p>
      ) : post ? (
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            {post.title}
          </h2>
          <p className="text-gray-700 whitespace-pre-line">{post.body}</p>
        </div>
      ) : (
        <p className="text-center text-red-500">No post data found.</p>
      )}
    </div>
  );
};

export default TaskFive;
