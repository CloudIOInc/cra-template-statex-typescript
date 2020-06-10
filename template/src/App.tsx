import React from "react";
import { useStateX } from "@cloudio/statex";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useStateX(["counter"], 0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        {count}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </header>
    </div>
  );
}

export default App;
