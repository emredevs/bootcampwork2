import React from "react";
import "../../App.css";
export default function Form({ setNote }) {
  const formSubmit = (e) => {
    e.preventDefault();
    // inputtan veri girişinin sağlanması ve input boş ise listeye eklemenin yapılmamasını sağlayan komut
    const todoInput = e.target["todo-input"];
    if (!todoInput.value) {
      return;
    }
    //listeye yeni eklenen notların state eklanmsi
    setNote({ todo: todoInput.value, checked: false });

    todoInput.value = "";
  };
  return (
    <div>
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
      </section>
    </div>
  );
}
