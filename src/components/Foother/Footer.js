import React from "react";
import "../../App.css";

export default function Footer({ note, setCategory, setNote }) {
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{note.length}</strong> items left
        </span>

        <ul className="filters">
          <li>
            {/* tüm listenin çağırıldığı yer  */}

            <button className="selected" onClick={() => setCategory(null)}>
              All
            </button>
          </li>
          <li>
            {/* checkbox false olanların filtrelenmesi  */}
            <button onClick={() => setCategory(false)}>Active</button>
          </li>
          <li>
            {/* checkbox true olanların filtrelenmesi  */}

            <button onClick={() => setCategory(true)}>Completed</button>
          </li>
        </ul>
        {/* listenin tamamının silindiği komut */}
        <button
          className="clear-completed"
          onClick={() => {
            setNote([]);
          }}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}
