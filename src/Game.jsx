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

  function jumpTo(nexMove) {
    setxIsNext(nexMove % 2 === 0);
    setHistory(history.slice(0, nexMove + 1));
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handPlay} />

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
