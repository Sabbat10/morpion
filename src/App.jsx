import React from "react";
import Square from "./components/Square";
import "./App.css";

import { useState } from "react";

export default function App() {
  // les useState
  const [square, setSquare] = useState(Array(9).fill(null));

  function handClick(i) {
    const nextSquare = square.slice();
    nextSquare[i] = "X";
    setSquare(nextSquare);
  }

  return (
    <div>
      <h3>Jeu de Morpion</h3>
      <div className="board-row">
        {" "}
        <Square value={square[0]} onSquareClick={() => handClick(0)} />
        <Square value={square[1]} onSquareClick={() => handClick(1)} />
        <Square value={square[2]} onSquareClick={() => handClick(2)} />
      </div>
      <div className="board-row">
        {" "}
        <Square value={square[3]} onSquareClick={() => handClick(3)} />
        <Square value={square[4]} onSquareClick={() => handClick(4)} />
        <Square value={square[5]} onSquareClick={() => handClick(5)} />
      </div>
      <div className="board-row">
        {" "}
        <Square value={square[6]} onSquareClick={() => handClick(6)} />
        <Square value={square[7]} onSquareClick={() => handClick(7)} />
        <Square value={square[8]} onSquareClick={() => handClick(8)} />
      </div>
    </div>
  );
}
