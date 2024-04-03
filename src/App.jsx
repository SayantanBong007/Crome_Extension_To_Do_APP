import React, { useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  // State to store the to-do list items
  const [items, setItems] = React.useState([]);

  // Load items from local storage on component mount
  useEffect(() => {
    // Retrieve stored items from local storage
    const storedItems = JSON.parse(localStorage.getItem("todoItems"));
    // If there are stored items, set them in state
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  // Save items to local storage whenever items change
  useEffect(() => {
    // Convert items array to JSON string and store in local storage
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  // Function to add a new item to the to-do list
  function addItem(inputText) {
    setItems((prevValue) => {
      // Add the new item to the existing items array
      return [...prevValue, inputText];
    });
  }

  // Function to delete an item from the to-do list
  function deleteItem(id) {
    setItems((prevItems) => {
      // Filter out the item with the given index
      return prevItems.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* Component for adding new to-do items */}
      <Input typed={addItem}></Input>
      <div>
        <ul>
          {/* Render each to-do item using the List component */}
          {items.map((toDoItem, index) => (
            <List
              key={index}
              id={index}
              text={toDoItem}
              completed={deleteItem}
            ></List>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
