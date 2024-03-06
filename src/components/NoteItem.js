import React, { useContext } from "react";
import NoteContext from '../context/notes/NoteContext';

const NoteItem = ({ note }) => { // Destructure `note` from props
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-regular fa-trash-can mx-2" style={{ cursor: 'pointer' }} onClick={() => deleteNote(note._id)}></i>
          <i className="fa-regular fa-pen-to-square mx-2" style={{ cursor: 'pointer' }}></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;