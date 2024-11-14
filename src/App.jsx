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


function Square ({value, click}) {
  return (
    <button className="square" onClick={(click)}>
      {value}
    </button>
  );
}

function Board({xNext, squares, onPlay}) {
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
    status = 'nextPerson:' + (xNext? 'X':'O');
  }
  return {
    <>
    <div className="status">{status} </div>
    <div className="boardRow">
      <Square value={square[0]} clickSquare={() => handleClick(0)} />
      <Square value={square[1]} clickSquare={() => handleClick(1)} />
      <Square value={square[2]} clickSquare={() => handleClick(2)} />
    </div>
  }
}