import { getAllNotes } from "../service/NotesService";
import { useState } from "react";

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const updateNotesWithGetAll = async () => {
    let allNotesObj = await getAllNotes();
    setNotes(allNotesObj.context);
  };
  return (
    <div className="App">
      <button onClick={updateNotesWithGetAll}>Refresh Notes</button>
      <div>{JSON.stringify(notes)}</div>
    </div>
  );
}

export default NoteApp;
