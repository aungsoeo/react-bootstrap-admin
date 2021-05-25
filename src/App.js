import { useState, createContext } from "react";
import Note from "./Note";

export const NoteContext = createContext();

function App() {

  const [note, setNote] = useState("");

  function handleChange(event) {
    setNote(event.target.value);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 py-2">
          <input type="text" value={note} onChange={handleChange} className="mb-2"/>
          <NoteContext.Provider value={note}>
            <Note />
          </NoteContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
