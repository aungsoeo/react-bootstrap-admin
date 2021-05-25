import { NoteContext } from "./App";
import { useContext } from "react";

function Note() {

  const context = useContext(NoteContext);

  return (
    <div className="alert alert-primary" role="alert">
      {context || 'Hello'}
    </div>
  );
}

export default Note;
