import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [error, setError] = useState({ message: "", field: "" }); // Error state to track missing field
  const [flashing, setFlashing] = useState(false); // State to control flashing effect

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function handleAdd(event) {
    // Check if both title and content are non-empty
    if (note.title.trim() === "" && note.content.trim() === "") {
      setError({ message: "Both fields are required", field: "both" });
      flashField("both");
    } else if (note.title.trim() === "") {
      setError({ message: "Title is required", field: "title" });
      flashField("title");
    } else if (note.content.trim() === "") {
      setError({ message: "Content is required", field: "content" });
      flashField("content");
    } else {
      props.onAdd(note);
      setNote({ title: "", content: "" });
    }

    event.preventDefault();
  }

  // Flashing effect for the missing input field
  function flashField(field) {
    setFlashing(true);

    let count = 0;
    const interval = setInterval(() => {
      const fieldElement = document.querySelector(`.${field}`);
      fieldElement.classList.toggle("flash");
      count += 1;
      if (count === 6) { // Flash 3 times (toggle class twice)
        clearInterval(interval);
        fieldElement.classList.remove("flash");
        setFlashing(false); // Reset flashing state after the effect
      }
    }, 500); // Toggle every 500ms (flash effect)
  }

  // Handle Enter key press to add a note using onKeyDown instead of onKeyPress
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAdd(event);
    }
  }

  // Automatically hide the error message after 2 seconds
  React.useEffect(() => {
    if (error.message) {
      const timer = setTimeout(() => {
        setError({ message: "", field: "" });
      }, 2000); // Hide the error message after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [error.message]); // Dependency array ensures it runs only when the error message changes

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          className={error.field === "title" || error.field === "both" ? "error" : ""}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          onKeyDown={handleKeyDown}
          className={error.field === "content" || error.field === "both" ? "error" : ""}
        />
        <button onClick={handleAdd}><AddIcon/> </button>
      </form>
      {error.message && <div className="error-message">{error.message}</div>}
    </div>
  );
}

export default CreateArea;
