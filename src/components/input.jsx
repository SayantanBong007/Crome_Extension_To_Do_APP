import React from "react";

function Input(props) {
  // State to manage the text input value
  const [inputText, setInputText] = React.useState("");

  // Handler for input change event
  function handleOnChange(event) {
    // Update the input text state with the value from the input field
    setInputText(event.target.value);
  }

  // Handler for key press event (Enter key)
  function handleOnEnter(event) {
    // Check if Enter key is pressed
    if (event.key === "Enter") {
      // Call the function passed as prop to add the input text as a new item
      props.typed(inputText);
      // Clear the input text state
      setInputText("");
    }
  }

  return (
    <div className="form">
      {/* Input field */}
      <input
        onChange={handleOnChange}
        onKeyPress={handleOnEnter}
        type="text"
        value={inputText}
      />
      {/* Button to add new item */}
      <button
        onClick={() => {
          // Call the function passed as prop to add the input text as a new item
          props.typed(inputText);
          // Clear the input text state
          setInputText("");
        }}
      >
        {/* Button text */}
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
