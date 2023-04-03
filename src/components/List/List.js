import React from "react";
import "../../App.css";
export default function List({ filterNotes, note, setNote, deleteByIndex }) {
  return (
    <div>
      <section>
        <ul className="todo-list">
          {/* eklenen notların listelenmesi ve filtrelenmesi */}
          {filterNotes().map((notes, index) => {
            return (
              <li className="completed" key={index}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={notes.checked}
                    onChange={(event) => {
                      const newTodos = [...note];
                      newTodos[index].checked = event.target.checked;
                      setNote(newTodos);
                    }}
                    id={index}
                  />
                  <label htmlFor={index}>{notes.todo}</label>
                  <button
                    className="destroy"
                    // tablodan notların tektek silinme işlemini gerçekleşmesi
                    onClick={() => deleteByIndex(index)}
                  ></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
