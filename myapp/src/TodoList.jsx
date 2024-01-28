import { useState } from "react";
export function TodoList() {
  const [todos, setTodos] = useState(["ice", "earth", "fire", "water"]);

  function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector("input");
    let value = input.value
    setTodos([...todos, value]);
    input.value = ""
    
  }

  function handleReset(){
    setTodos([])
  }
  return (
    <>
      <h2>list</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" />
        <button>Premi</button>
        <button type="reset" onClick={handleReset}>Reset</button>
      </form>
    </>
  );
}