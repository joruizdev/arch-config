import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}


const Square = ({children, updateBoard, index}) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

function App() {
const [board, setBoard] = useState(Array(9).fill(null))

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
    </main>
    

  )
}

export default App
