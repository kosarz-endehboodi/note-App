import React, { useState } from "react";

//function export to orginal file
export default function AddNoteForm({ onAddNote }) {
  //states
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  //functions
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      Completed: false,
      createdAt: new Date().toISOString(),
    };
   
    settitle("");
    setdescription("");
    onAddNote(newNote);
    //update  notes

  };

  const handlerTitle = (e) => {
    settitle(e.target.value);
  };
  const handlerdescription = (e) => {
    setdescription(e.target.value);
  };

  //elements
  return (
    <div className="add-new-note">
      <h2> add new note</h2>
      <form onSubmit={handelSubmit} className="note-form">
        <input
          value={title}
          onChange={handlerTitle}
          className="text-field"
          type="text"
          placeholder="title"
        />
        <input
          value={description}
          onChange={handlerdescription}
          className="text-field"
          placeholder="Note descrioption"
          type="text"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}
