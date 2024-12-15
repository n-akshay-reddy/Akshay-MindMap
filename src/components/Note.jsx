import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';


function Note({ id, title, content, onDelete, onEdit }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}><DeleteIcon /> </button>
      <button onClick={onEdit}><EditNoteIcon sx={{ fontSize: 30 }} /></button> 
    </div>
  );
}

export default Note;
