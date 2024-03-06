import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "65d63dc6c9sa6e1886dc638585",
      "user": "65c67bea7a68bfd2faa9c1eb",
      "title": "My-title2a",
      "description": "My-desc2a",
      "tag": "My-tag",
      "date": "2024-02-21T18:15:34.416Z",
      "__v": 0
    },
    {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d651sq218810814405c6eef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      },
      {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d65qw1218810814405c6eef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      },
      {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d6512wq18810814405c6eef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      },
      {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d6512dw18810814405c6eef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      },
      {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d6512188108144wq05c6eef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      },
      {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d651wq218810814405c6eef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      },
      {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d651218810814405c6ewqef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      },
      {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d65ds1218810814405c6eef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      },
      {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d651218as810814405c6eef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      },
      {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d6512qw18810814405c6eef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      },
      {
        "user": "65c67bea7a68bfd2faa9c1eb",
        "title": "My-titalea",
        "description": "aMy-desc29a",
        "tag": "My-tag",
        "_id": "65d6512we18810814405c6eef3",
        "date": "2024-02-21T19:38:09.999Z",
        "__v": 0
      }

  ];

  const [notes, setNotes] = useState(notesInitial);

  //add notes
  const addNote=(title,description,tag)=>{
    const note={
      "user": "65c67bea7a68bfd2faa9c1eb",
      "title": title,
      "description": description,
      "tag": tag,
      "_id": "65d651218810814405c6eef3",
      "date": "2024-02-21T19:38:09.999Z",
      "__v": 0
    };
setNotes(notes.concat(note))
  }
  //delete note

const deleteNote=(id)=>{
  const newNotes=notes.filter((note)=>{return note._id!==id})
  setNotes(newNotes);
  }

  //edit note
  const editNote=(id,title,description,tag)=>{
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id===id){
        element.title=title;
        element.description=description;
        element.tag=tag;

      }
      
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote,deleteNote,editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
