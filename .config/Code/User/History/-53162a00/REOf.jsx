import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}


const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
           return (
            <Square
              key={index}
              index={index}
              updateBoard={() => {}}>{index}
            </Square>
           )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={true === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={true === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
    

  )
}

export default App
