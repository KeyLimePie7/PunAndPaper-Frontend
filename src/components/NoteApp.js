// import { getAllNotes, createNewNote } from "../service/NotesService";
import { getAllNotes, createNewNote } from "../service/MockNotesService";
import { NoteCard } from "./NoteCard"

import { useState, useEffect } from "react";

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const updateNotesWithGetAll = async () => {
    let allNotesObj = await getAllNotes();
    setNotes(allNotesObj.context);
  };

  const [showModalCreate, setShowModalCreate] = useState("");
  const [formTitle, setFormTitle] = useState("Title");
  const [formContent, setFormContent] = useState("Content");
  const handleShowModalCreate = () => {
    setShowModalCreate("showNow");
  }
  const handleCloseModalCreate = () => {
    setShowModalCreate("");
  }
  const handleCreateNote = () => {
    handleShowModalCreate();
  }
  const handleCreateNoteSubmit = () => {
    createNewNote(formTitle,formContent);
    setFormTitle("Title");
    setFormContent("Content");
    handleCloseModalCreate();
    updateNotesWithGetAll();
  }
  useEffect(() => {
    updateNotesWithGetAll();
  }, [formTitle, formContent])

  return (
    <div className="App">
      <button className="waves-effect waves-light btn center marginSides" onClick={updateNotesWithGetAll}>Refresh Notes</button>
      <button className="waves-effect waves-light btn center marginSides" onClick={handleCreateNote}>Create Note</button>
      <div>
        <br></br>
      </div>
      <div className="container">
        <div id="modal1" className={"modal " + showModalCreate}>
              <div className="modal-content">
                  <h4>Create Note</h4>
                  <form>
                      <input type="text" value={formTitle} onChange={(e) => setFormTitle(e.target.value)}/>
                      <input type="text" value={formContent} onChange={(e) => setFormContent(e.target.value)}/>
                  </form>
              </div>
              <div className="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={handleCreateNoteSubmit}>Save</a>
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={handleCloseModalCreate}>Cancel</a>
              </div>
          </div>
        {notes.map(note => (<NoteCard key={note.id} noteProp={note} refresh={updateNotesWithGetAll}></NoteCard>))} 
      </div>
    </div>
  );
}

export default NoteApp;
