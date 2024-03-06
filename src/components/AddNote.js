import React, { useState, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const { addNote } = useContext(NoteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    addNote(note.title, note.description, note.tag); // Pass title, description, and tag to addNote
    setNote({ title: "", description: "", tag: "" }); // Clear the input fields after adding the note
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h2>Add Your Note</h2>
        <form style={{ margin: "20px", padding: "20px" }}>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="title">Note</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={note.title} // Bind input value to note.title
              onChange={onChange}
              placeholder="Enter your note"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your notes with anyone else.
            </small>
          </div>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              id="description"
              value={note.description} // Bind input value to note.description
              placeholder="Enter your description"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
