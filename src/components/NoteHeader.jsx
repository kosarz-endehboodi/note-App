import { useState } from "react";

export default function Header({ notes, onSort, sortBy }) {
  //   const sorthandler = (e) => {
  //     setsortby(e.taget.value);
  //   };
  const allNotes = notes.length;
  return (
    <div className="note-header">
      <div>
        <h2>My Notes({allNotes})</h2>
      </div>
      <div>
        <select value={sortBy} onChange={onSort}>
          <option value="latest"> sort based on lastest notes</option>
          <option value="earliest"> sort based on earliest notes</option>
          <option value="completed"> sort based on completed notes</option>
        </select>
      </div>
    </div>
  );
}
