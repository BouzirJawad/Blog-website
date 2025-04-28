import React, { useState, useEffect } from "react";
import { getCommentsByArticle, addComment, deleteComment, updateComment } from '../server/commentService';
import CommentForm from './CommentForm';
import { toast } from 'react-hot-toast';
import { useFetch } from '../hooks/useFetch';

const CommentSection = ({ articleId }) => {
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const { data: comments, error } = useFetch(getCommentsByArticle(articleId));

  useEffect(() => {
    if (reloadTrigger > 0) {
      setReloadTrigger(0);
    }
  }, [reloadTrigger]);

  const handleAdd = (comment) => {
    addComment(comment).subscribe({
      next: () => {
        toast.success('Comment added!');
        setReloadTrigger(prev => prev + 1);
      },
      error: () => toast.error('Failed to add comment')
    });
  };

  const handleDelete = (id) => {
    deleteComment(id).subscribe({
      next: () => {
        toast.success('Comment deleted!');
        setReloadTrigger(prev => prev + 1);
      },
      error: () => toast.error('Failed to delete comment')
    });
  };

  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState('');

  const handleEdit = (comment) => {
    setEditingCommentId(comment.id);
    setEditedContent(comment.content);
  };

  const handleSave = (id) => {
    updateComment(id, { content: editedContent }).subscribe({
      next: () => {
        toast.success('Comment updated!');
        setEditingCommentId(null);
        setEditedContent('');
        setReloadTrigger(prev => prev + 1);
      },
      error: () => toast.error('Failed to update comment')
    });
  };

  if (error) return <p className="text-red-500">Failed to load comments.</p>;

  return (
    <div className="w-[90%] max-w-3xl mx-auto mainDiv p-5 rounded-2xl">
      <CommentForm articleId={articleId} onAdd={handleAdd} />
      <ul className="flex flex-col gap-2">
        {comments.map((c) => (
          <li key={c.id} className="border p-2 rounded">
            <strong>{c.author}</strong>:
            {editingCommentId === c.id ? (
              <>
                <input
                  type="text"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="border p-1 rounded ml-2"
                />
                <button onClick={() => handleSave(c.id)} className="ml-2 text-green-600">Save</button>
                <button onClick={() => setEditingCommentId(null)} className="ml-2 text-gray-500">Cancel</button>
              </>
            ) : (
              <>
                <p>{c.content}</p>
                <button onClick={() => handleEdit(c)} className="mr-2 text-blue-600">Edit</button>
                <button onClick={() => handleDelete(c.id)} className="text-red-600">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
