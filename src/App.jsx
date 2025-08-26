import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  // deleteNote function
  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are You sure you want to delete this note?"
    );

    if (confirmDelete) {
      const filteredNotes = notes.filter((note) => note.id !== id);
      setNotes(filteredNotes);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text0center ">Notes App</h2>

      <NoteForm setNotes={setNotes} notes={notes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
