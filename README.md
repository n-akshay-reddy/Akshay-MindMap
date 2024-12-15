
Akshay MindMap - Note-Taking Web Application

Akshay MindMap is a simple yet powerful note-taking web application built using React. The app allows users to create, edit, and delete notes with an intuitive and user-friendly interface. It also features validation to ensure no empty notes are added, along with stylish animations and design elements to enhance the user experience. Material UI icons are used throughout the app for interactive actions like adding, editing, and deleting notes.

Features:

1. Add Notes:

- Users can add a note by filling out the "Title" and "Content" fields.
- A note cannot be added if any field is left empty. An error message will be displayed, highlighting the missing fields with a animation.
- Add Icon: The AddIcon from Material UI is used for adding new notes.

2. Edit Notes:

- Each note can be edited using the "Edit" button.
- When editing, a popup appears with fields pre-filled with the current note content.
- Users can save the changes or cancel the edit operation using the respective buttons in the popup.
- Edit Icon: The EditNoteIcon from Material UI is used to represent the edit action.

3. Delete Notes:

- Users can delete notes using the "Delete" button, conveniently placed on each note.
- Delete Icon: The DeleteIcon from Material UI is used to represent the delete action.

4. Validation:

- If the user tries to add a note without filling in both the "Title" and "Content" fields, the app displays an error message below the "Create a New Note" section.

5. Keyboard Shortcut:

- Pressing the "Enter" key while the cursor is in the "Content" field will add the note (if both fields are filled).

6. Responsive Design:

- The application is styled to work seamlessly on all screen sizes, ensuring an optimal user experience on both desktop and mobile devices.

7. Styling Features:

- A modern and clean design with gradient backgrounds, shadows, and visually appealing buttons.
- Popup windows for editing notes feature a gradient background matching the app theme.
- Input fields have a light gray background (#eee) for a softer appearance.

8. Material UI Icons:

The app uses the following Material UI icons for various actions:
- Add Icon: AddIcon is used for adding new notes.
- Edit Icon: EditNoteIcon is used for editing existing notes.
- Delete Icon: DeleteIcon is used for deleting notes.

Material UI provides a modern and consistent look and feel, making interactions with the app visually appealing.


Technologies Used:
React: For building the user interface.
Material UI: For UI components and icons.
CSS: For custom styling, animations, and responsive design.