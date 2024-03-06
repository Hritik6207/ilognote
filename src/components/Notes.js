import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote'; // Assuming you have AddNote component imported

function Notes() {
    const { notes } = useContext(NoteContext);
    
    return (
        <>
            <AddNote />
            <div className='row my-3'>
                <div className="col-md-10 offset-md-1">
                    <h4 className="text-center mb-4">Your Notes</h4>
                    <div className="row">
                        {notes.map((note, index) => (
                            <NoteItem key={index} note={note} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notes;
