import "./App.css";
import NoteForm from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import Notestatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { useReducer, useState } from "react";
import { Component } from "react";

//
function reducer(state, { type, payload }) {
  switch (type) {
    case "addNewNote": {
      return [...state, payload]
    }
    case "deleteNote": {
      return state.filter(s => s.id !== payload)
    }

    case "complated": {
      return state.map((note) => note.id === payload ? { ...note, Completed: !note.Completed } : note)

    }
    default: throw new Error("Unknow error")
  }
}

function App() {
  // const [notes, setNotes] = useState([]);
  
  const [sortBy, setsortBy] = useState("latest");
  JSON.parse(localStorage.getItem("data"))
  const [notes, dispatch] = useReducer(reducer, [] = JSON.parse(localStorage.getItem("data")) || []);
  localStorage.setItem("data", JSON.stringify(notes))

  //local 
  // const [check, setcheck] = useState(true);
  // localStorage.getItem("chacked")
  // localStorage.setItem("chacked", setcheck())


  const handelNote = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "addNewNote", payload: newNote })
  };
  const HandelDelet = (id) => {
    // const filteredNote = notes.filter((n) => n.id !== id);
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    dispatch({ type: "deleteNote", payload: id })
  };

  const HandelCompleted = (e) => {

    const noteId = Number(e.target.value);
    dispatch({ type: "complated", payload: noteId })

    // setNotes((prevcheckNotes) =>
    //   prevcheckNotes.map((note) =>
    //     note.id === noteId ? { ...note, Completed: !note.Completed } : note
    //   )
    // );
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