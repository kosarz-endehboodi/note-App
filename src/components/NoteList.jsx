import React, { useState } from "react";

export default function NoteList({ notes, DeleteNote, onCompleted, sortBy }) {


  // loop for sort

  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ); //a - b =>  if  a > b ? 1  :  -1

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ); //b - a =>  if  a > b ? -1  :  1

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.Completed) - Number(b.Completed)
    );


  return (
    <div className="note-list">
      {
        sortedNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            DeleteNote={DeleteNote}
            onCompleted={onCompleted}
          />
        ))
      }
    </div>
  );
}

function NoteItem({ note, DeleteNote, onCompleted }) {
  const options = {
    year: "numeric",
    month: "long",
    year: "numeric",
  };





  return (
    <div className={`note-item ${note.Completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => DeleteNote(note.id)}>❌</button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.onCompleted}
            onChange={onCompleted}

          />
        </div>
      </div>
      <div className="note-item__footer"></div>
      {new Date(note.createdAt).toLocaleDateString("en-US", options)}
    </div>
  );
}
