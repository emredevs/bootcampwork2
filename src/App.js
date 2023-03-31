import "./App.css";
import { useState } from "react";
function App() {
  const [note, setNote] = useState([]);
  const [category, setCategory] = useState(null);
  const formSubmit = (e) => {
    e.preventDefault();
    const todoInput = e.target["todo-input"];
    if (!todoInput.value) {
      return;
    }
    setNote([{ todo: todoInput.value, checked: false }, ...note]);
    todoInput.value = "";
  };
  console.log(note);

  const deleteByIndex = (index) => {
    setNote((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  // const [filterNote, setFiteredNote] = useState(note);

  // const completedNote = () => {
  //   const filtered = note.filter((notes) => notes.checked === true);
  //   setFiteredNote(filtered);
  // };

  // const activeNote = () => {
  //   const filtered = note.filter((notes) => notes.checked === false);
  //   setFiteredNote(filtered);
  // };

  // const allNote = () => {
  //   setFiteredNote(note);
  // };

  const filterNotes = () => {
    return note.filter((note) => {
      if (category === null) {
        return true;
      }
      return note.checked === category;
    });
  };

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={formSubmit}>
            <input
              name="todo-input"
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" id="toggle-all" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
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
                      onClick={() => deleteByIndex(index)}
                    ></button>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{note.length}</strong> items left
          </span>

          <ul className="filters">
            <li>
              <button className="selected" onClick={() => setCategory(null)}>
                All
              </button>
            </li>
            <li>
              <button onClick={() => setCategory(false)}>Active</button>
            </li>
            <li>
              <button onClick={() => setCategory(true)}>Completed</button>
            </li>
          </ul>

          <button
            className="clear-completed"
            onClick={() => {
              setNote([]);
            }}
          >
            Clear completed
          </button>
        </footer>
      </section>
    </div>
  );
}

export default App;
