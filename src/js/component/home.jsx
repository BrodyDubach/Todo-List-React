import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, currentIndex) => index !== currentIndex));
  };

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTodo();
              }
            }}
            placeholder="Add Todo."
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <i
              className="fas fa-trash-alt"
              onClick={() => handleDeleteTodo(index)}
            ></i>
          </li>
        ))}
      </ul>
      <div>{todos.length} Tasks</div>
    </div>
  );
};

export default Home;