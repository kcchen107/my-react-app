import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


function Square({ value, click }) {
  return (
    <button className="square" onClick={(click)}>
      {value}
    </button>
  );
}

function Board({ xNext, squares, onPlay }) {
  function handleClick(i) {
    if (calcWinner(squares) || squares(i)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xNext) {
      next[i] = 'X';
    }
    else {
      next[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const determineWinner = calcWinner(squares);
  let status;
  if (winner) {
    status = 'winner' + winner;
  }
  else {
    status = 'nextPerson:' + (xNext ? 'X' : 'O');
  }
  return {
    <> <><div className="status">{status} </div><div className="boardRow">
      <Square value={squares[0]} click={() => handleClick(0)} />
      <Square value={squares[1]} click={() => handleClick(1)} />
      <Square value={squares[2]} click={() => handleClick(2)} />
    </div><div className="boardRow">
        <Square value={squares[3]} click={() => handleClick(3)} />
        <Square value={squares[4]} click={() => handleClick(4)} />
        <Square value={squares[5]} click={() => handleClick(5)} />
      </div><div className="boardRow">
        <Square value={squares[6]} click={() => handleClick(6)} />
        <Square value={squares[7]} click={() => handleClick(7)} />
        <Square value={squares[8]} click={() => handleClick(8)} />
      </div> </> </>
  };
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, chooseCurrentMove] = useState(0);
  const xNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    chooseCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    chooseCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move number' + move;
    }
    else {
      description = "Return to start";
    }
    return {
      <li key = { move } >
      <button onClick={() jumpTo(move)}> { description } 
      </button >
      </li >
    };
  }
});

return {
  <div className="tttGame">
    <><div className="tttBoard">
      <Board xNext={xNext} squares={currentSquares} onPlay={handlePlay} />
    </div><div className='tttInfo'>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
};
}

function determineWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
}
