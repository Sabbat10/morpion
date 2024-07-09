import React from "react";
import Square from "./components/Square";
import "./App.css";

export default function App() {
  return (
    <div>
      <h3>Jeu de Morpion</h3>
      <div className="board-row">
        {" "}
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        {" "}
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        {" "}
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
