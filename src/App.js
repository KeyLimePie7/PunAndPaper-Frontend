import "./App.css";
import NoteApp from "./components/NoteApp";

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <div className="brand-logo center">PunAndPaper</div>
            {/* <ul id="nav-mobile" className="hide-on-med-and-down">
              <li>The be-all, end-all, of note taking applications</li>
            </ul> */}
          </div>
        </nav>
      </div>
      <br></br>
      <NoteApp></NoteApp>
    </div>
  );
}

export default App;
