import React, { useState } from "react";

function EditPopup({ note, onSave, onCancel }) {
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    content: note.content,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleSave() {
    onSave(editedNote, note.index); // Save the edited note
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Edit Note</h2>
        <input
          name="title"
          value={editedNote.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={editedNote.content}
          onChange={handleChange}
          placeholder="Content"
          rows="4"
        />
        <div className="popup-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditPopup;
