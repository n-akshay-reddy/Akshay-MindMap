import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import EditPopup from "./EditPopup"; // New component for the edit popup

function App() {
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Track editing state
  const [currentNote, setCurrentNote] = useState(null); // Track note being edited

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((noteItem, index) => index !== id));
  }

  function handleEdit(note, index) {
    setIsEditing(true);
    setCurrentNote({ ...note, index }); // Save note and index for editing
  }

  function saveEdit(updatedNote, index) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index] = updatedNote; // Update the note at the specified index
      return updatedNotes;
    });
    setIsEditing(false);
    setCurrentNote(null);
  }

  function cancelEdit() {
    setIsEditing(false);
    setCurrentNote(null);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          onEdit={() => handleEdit(noteItem, index)} // Pass edit handler
        />
      ))}
      {isEditing && (
        <EditPopup
          note={currentNote}
          onSave={saveEdit}
          onCancel={cancelEdit}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
