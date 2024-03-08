import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote"; // Assuming you have AddNote component imported

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);

  const ref = useRef(null);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle:currentNote.title, edescription: currentNote.description,etag:currentNote.tag})
  };

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setNote({ title: "", description: "", tag: "" }); // Clear the input fields after adding the note
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddNote />
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="etitle">Note</label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              aria-describedby="emailHelp"
              value={note.etitle} // Bind input value to note.title
              onChange={onChange}
              placeholder="Enter your note"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your notes with anyone else.
            </small>
          </div>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="edescription">Description</label>
            <input
              type="text"
              name="edescription"
              className="form-control"
              id="edescription"
              value={note.edescription} // Bind input value to note.description
              placeholder="Enter your description"
              onChange={onChange}
            />
            
          </div>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="etag">Tag</label>
            <input
              type="text"
              name="etag"
              className="form-control"
              id="etag"
              value={note.etag} // Bind input value to note.description
              placeholder="Enter your tag"
              onChange={onChange}
            />
            
          </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button onClick={handleClick} type="button" className="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>

      <div className="row my-3">
        <div className="col-md-10 offset-md-1">
          <h4 className="text-center mb-4">Your Notes</h4>
          <div className="row">
            {notes.map((note, index) => (
              <NoteItem key={index} updateNote={updateNote} note={note} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
