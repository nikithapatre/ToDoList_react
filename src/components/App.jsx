import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {     // id== index of the item to be deleted
    setItems((prevValue) => {  // setItems == set the items array
      return prevValue.filter((item, index) => {   // filter = ends with which is not equal to id.
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              text={todoItem}
              onChecked={deleteItem}
              key={index}
              id={index}
            /> // in order to displat different todo each time through map, we need to display a property i.e., text= {todoItem}
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
