import React, { useState } from "react";

const CommentForm = ({ articleId, onAdd }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !content) return;
    onAdd({ articleId, author, content, createdAt: new Date().toISOString() });
    setAuthor('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name"
        className="p-2 border rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Comment</button>
    </form>
  );
};

export default CommentForm;
