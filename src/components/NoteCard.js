// import { deleteNote, updateNote } from "../service/NotesService";
import { deleteNote, updateNote } from "../service/MockNotesService";

import { useState, useEffect } from "react";

export function NoteCard(props) {
  const [showModal1, setShowModal1] = useState("");
  const [formTitle, setFormTitle] = useState(props.noteProp.title);
  const [formContent, setFormContent] = useState(props.noteProp.content);

  const handleShowModal1 = () => {
    setShowModal1("showNow");
  }
  const handleCloseModal1 = () => {
    setShowModal1("");
  }

  const handleDeleteNote = () => {
    deleteNote(props.noteProp.id);
    props.refresh();
  }
  const handleSaveNote = () => {
    updateNote(props.noteProp.id, formTitle, formContent);
    handleCloseModal1();
    props.refresh();
  }
  useEffect(() => {
    props.refresh();
  }, [formTitle, formContent])

  return (
    <div className="App">
      <div className="row">
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{props.noteProp.title}</span>
                    <p>{props.noteProp.content}</p>
                </div>
                <div className="card-action">
                    <a href="#!" onClick={handleShowModal1}>Edit</a>
                    <a href="#!" onClick={handleDeleteNote}>Delete</a>
                </div>
            </div>
        </div>
      </div>

      <div id="modal1" className={"modal " + showModal1}>
            <div className="modal-content">
                <h4>Edit Note</h4>
                <form>
                    <input type="text" value={formTitle} onChange={(e) => setFormTitle(e.target.value)}/>
                    <input type="text" value={formContent} onChange={(e) => setFormContent(e.target.value)}/>
                </form>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={handleSaveNote}>Save</a>
                <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={handleCloseModal1}>Cancel</a>
            </div>
        </div>
    </div>
  );
}
