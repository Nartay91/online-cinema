import React from 'react';
import  useStore  from "../store/UseStore";
import "./Notes.css";
import Note from '../pages/State';


const App = () => {
  const { notes, addNote, toggleDone, deleteNote, editNote } = useStore();
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [author, setAuthor] = React.useState('');

  const handleAddNote = () => {
    if (title && text && author) {
      addNote(title, text, author);
      setTitle('');
      setText('');
      setAuthor('');
    }
  };

  return (
    <div className="notes__app">
      <h1 className="gradient-text">Notes</h1>
      <div className="note-form">
        <label className="note_label">Task Name</label>
        <input className='input__info'
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="note_label">Description</label>
        <textarea className='input__describe'
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <label className="note_label">Author</label>
        <input className='input__info'
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className='btn__add' onClick={handleAddNote}>Add a note</button>
      </div>
      {notes.length > 1 ? (
        <details>
          <summary>List of notes: {notes.length}</summary>
          <div className="notes-list">
            {notes.map((note) => (
              <Note
                key={note.id}
                {...note}
                onToggleDone={toggleDone}
                onEdit={editNote}
                onDelete={deleteNote}
              />
            ))}
          </div>
        </details>
      ) : (
        <div className="notes-list_2">
          {notes.map((note) => (
            <Note
              key={note.id}
              {...note}
              onToggleDone={toggleDone}
              onEdit={editNote}
              onDelete={deleteNote}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;