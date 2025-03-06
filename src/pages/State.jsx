import React, { useState } from 'react';

const Note = ({ id, title, text, author, done, createdAt, onToggleDone, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedText, setEditedText] = useState(text);
  const [editedAuthor, setEditedAuthor] = useState(author);

  const handleSave = () => {
    onEdit(id, { title: editedTitle, text: editedText, author: editedAuthor });
    setIsEditing(false);
  };

  return (
    <div className={`note ${done ? 'done' : 'not-done'}`}>
      {isEditing ? (
        <div className='editing'>
          <input className='editing_input'
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea className='editing_text'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          ></textarea>
          <input className='editing_input'
            type="text"
            value={editedAuthor}
            onChange={(e) => setEditedAuthor(e.target.value)}
          />
          <button className='btn__done' onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className='new__notes'>
          <h3 className='title__note3'>Title: {title}</h3>
          <p className='text__note3'>{text}</p>
          <div>
            <span className='author_create'>Created by: {author}</span>
            <br />
            <span className='author_create'>Created: {createdAt}</span>
          </div>
        </div>
      )}
      {!isEditing && (
        <footer className='btns__footer'>
          <button className='btn__done' onClick={() => onToggleDone(id)}>
            {done ? '✅ done' : '❌ do it!'}
          </button>
          <button className='btn__del_edit' onClick={() => setIsEditing(true)}>✏️ Edit</button>
          <button className='btn__del_edit' onClick={() => onDelete(id)}>🗑️ Delete</button>
        </footer>
      )}
    </div>
  );
};

export default Note;
