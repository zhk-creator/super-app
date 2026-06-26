import { useEffect, useState } from "react";
import "./NotesWidget.css";

function NotesWidget() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(saved);
  }, []);

  const handleChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };

  return (
    <div className="widget notes-widget">
      <h2>All Notes</h2>

      <textarea
        placeholder="Write your notes..."
        value={notes}
        onChange={handleChange}
      />
    </div>
  );
}

export default NotesWidget;