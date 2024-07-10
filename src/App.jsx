import React from "react";
import Square from "./components/Square";
import "./App.css";

import { useState } from "react";

export default function App() {
  // les useState
  const [xIsNext, setxIsNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handClick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();

    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "0";
    }
    setSquare(nextSquare);
    setxIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <h3>Jeu de Morpion</h3>
      <div className="status">
        <i>{status}</i>
      </div>
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
