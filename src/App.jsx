import React from "react";
import Square from "./components/Square";
import "./App.css";

import { useState } from "react";

export default function App() {
  // les useState
  const [square, setSquare] = useState(Array(9).fill(null));

  return (
    <div>
      <h3>Jeu de Morpion</h3>
      <div className="board-row">
        {" "}
        <Square value={square[1]} />
        <Square value={square[2]} />
        <Square value={square[3]} />
      </div>
      <div className="board-row">
        {" "}
        <Square value={square[4]} />
        <Square value={square[5]} />
        <Square value={square[6]} />
      </div>
      <div className="board-row">
        {" "}
        <Square value={square[7]} />
        <Square value={square[8]} />
        <Square value={square[9]} />
      </div>
    </div>
  );
}
