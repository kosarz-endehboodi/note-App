import "./App.css";
import NoteForm from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import Notestatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { useState } from "react";

//
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setsortBy] = useState("latest");

  const handelNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const HandelDelet = (id) => {
    // const filteredNote = notes.filter((n) => n.id !== id);
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const HandelCompleted = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevcheckNotes) =>
      prevcheckNotes.map((note) =>
        note.id === noteId ? { ...note, Completed: !note.Completed } : note
      )
    );
  };
 
  //components
  return (
    <div className="container">
      <NoteHeader
        onSort={(e) => setsortBy(e.target.value)}
        sortBy={sortBy}
        notes={notes}
      />
      <div className="note-app">
        <NoteForm onAddNote={handelNote} />
        <div className="note-container">
          <Notestatus notes={notes} />
          <NoteList
          sortBy={sortBy}
            notes={notes}
            onCompleted={HandelCompleted}
            DeleteNote={HandelDelet}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
