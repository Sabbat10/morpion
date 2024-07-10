import React from "react";
import Board from "./components/Board";
import "./Game.css";
// import calculateWinner from "./components/calculateWinner";
import { useState } from "react";

export default function Game() {
  const [xIsNext, setxIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handPlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setxIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handPlay} />

      <div className="game-info">
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
