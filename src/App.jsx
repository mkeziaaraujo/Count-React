import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let countElement = 0

  function Add() {
    setCount(count + 1)
  }
  function Reset() {
    setCount(countElement)
  }
  function Less() {
    setCount(count - 1)
    if (count <= 0) {
      setCount(Reset)
    }
  }
  return (
    <>
      <div className="container">
        <h1>Count</h1>
        </div>
        <div className="container-two">
          <span className="result">{count}</span>
        </div>
        <div className="btns" >
        <button className="btn-less" onClick={Less}>
          Decrementar
        </button>
        <button className="btn-reset" onClick={Reset}>
          Resetar
        </button>
        <button className="btn-add" onClick={Add}>
          Incrementar
        </button>
      </div>
    </>
  );
}

export default App;