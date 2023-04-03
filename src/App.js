import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Footer from "./components/Foother/Footer";
function App() {
  const [note, setNote] = useState([]);
  const [category, setCategory] = useState(null);

  //bu işlem listeye eklenen notu silmek için aşağıda prop olarak geçtim componensts'e
  const deleteByIndex = (index) => {
    setNote((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };
  ///Filtreleme işleminin eski ve kullanışsız hali
  // const [filterNote, setFiteredNote] = useState(note);
  // const filterNotes = (condition) => {
  //   const filtered = note.filter((note) => note.checked === condition);
  //   setFilteredNote(filtered);
  // };
  // const showAllNotes = () => setFilteredNote(note);

  ///filtreleme işleminin son hali. bu halini yazarken profosyenel yardım aldım bildirmek istiyorum
  const filterNotes = () => {
    return note.filter((note) => {
      if (category === null) {
        return true;
      }
      return note.checked === category;
    });
  };
  console.log(note);
  return (
    <div className="App">
      <Form setNote={(note) => setNote((prev) => [note, ...prev])} />
      <List
        filterNotes={filterNotes}
        deleteByIndex={deleteByIndex}
        note={note}
        setNote={setNote}
      />
      <Footer note={note} setCategory={setCategory} setNote={setNote} />
    </div>
  );
}

export default App;
