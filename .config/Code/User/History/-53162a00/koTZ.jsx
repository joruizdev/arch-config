import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const board = Array(9).fill(null)

const Square = ({children, updateBoard, index}) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

function App() {
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
           return (
            <div className='cell' key={index}>
              <span className='cell-content'>
                {index}
              </span>
            </div>
           )
          })
        }
      </section>
    </main>
    

  )
}

export default App
