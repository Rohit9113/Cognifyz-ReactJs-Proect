import React from 'react';

const TaskOne = () => {
  return (
    <div className="p-4 sm:p-6 mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Basic Page
      </h1>

      <p className="mb-4 text-sm sm:text-base text-justify">
        <strong>Objective:</strong> To build a responsive and interactive website that incorporates various front-end development techniques, from basic HTML structure to advanced API integration and CSS preprocessing.
      </p>

      <p className="mb-2 text-sm sm:text-base font-medium">Steps:</p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-sm sm:text-base">
        <li>
          Create an HTML file (<code>index.html</code>) with the basic structure including <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags.
        </li>
        <li>
          Add a title to the webpage using the <code>&lt;title&gt;</code> tag.
        </li>
        <li>
          Insert headings, paragraphs, and an image within the body of the page.
        </li>
        <li>
          Save the file and open it in a web browser to ensure proper rendering.
        </li>
      </ol>

      <img
        src="https://images.unsplash.com/photo-1745861707861-3fe218029ac4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sample"
        className="w-full rounded shadow-md mx-auto"
      />
    </div>
  );
};

export default TaskOne;
